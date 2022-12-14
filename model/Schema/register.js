const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a name"]
    },
    email:{
        type:String,
        required:[true,"Please enter a email"],
        unique:true,
        trim:true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ]
    },
    hashedPassword:{
        type:String,
        // required:true,
        minLength:[6,"Password must be upto 6 characters"]
    }
},{timestamps:true})

const Register = mongoose.model("Register",registerSchema)

module.exports = Register;