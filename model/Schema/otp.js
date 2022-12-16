const mongoose = require('mongoose')

const otpSchema = mongoose.Schema({
    userId:{
        type:String
    },
    email:{
        type:String
    },
    code:{
        type:String
    },
    expireIn:{
        type:Number
    }
},{timestamps:true})

const Otp = mongoose.model("otp",otpSchema)

module.exports = Otp;