const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
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

const Register = mongoose.model("Admin",adminSchema)

module.exports = Register;