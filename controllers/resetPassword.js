const Otp = require("../model/Schema/otp");
const Register = require("../model/Schema/register");
const bcrypt = require('bcryptjs')

const resetPassword = async (req,res)=>{
    let data = await Otp.findOne({
        email:req.body.email,
        code:req.body.otpCode
    })

    if(data){
        let currentTime = new Date().getTime()
        let diff = data.expireIn - currentTime

        if(diff <= 0){
            return res.status(203).json({
                message:"OTP has been expired"
            })
        }
        else{
            // Hashing password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password,salt)

            // Saving updated password
            Register.findByIdAndUpdate(data.userId,{hashedPassword:hashedPassword},(err,res)=>{
                if(err) return console.log(err)
                return res.json({
                    message:"Password Changed Successfully"
                })
            })
        }
    }else{
        return res.status(203).json({
            message:"Invalid OTP"
        })
    }
}

module.exports = resetPassword;