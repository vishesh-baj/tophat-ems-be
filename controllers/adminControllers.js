const Register = require("../model/Schema/admin");
const bcrypt = require("bcryptjs");

const registerControllers = async(req,res)=>{
    const {name,email,password} = req.body;
    
    if(!name || !email || !password){
        res.status(203)
        return res.json({
            message:"Please fill all the fields."
        })
    }

    if(password.length < 6){
        return res.status(203).json({
            message:"Password have have atleast 6 characters"
        })
    }

    // Check if the email already exists
    const userExists = await Register.findOne({ email });

    if(userExists){
       return res.status(203).json({
        message:"Email has already been used"
       })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    const registerData = new Register({ name, email, hashedPassword });
    registerData.save();

    res.status(200).json({ message: "Account created Successfully !!" });
  }

module.exports = registerControllers;
