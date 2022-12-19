const mongoose  = require('mongoose')

const employeeSchema = mongoose.Schema({
    adminId:{
        type:String
    },
    name:{
        type:String,
        required:[true,"Please enter the name field"]
    },
    contactNumber:{
        type:Number,
        required:[true,"Please enter the contact number"]
    },
    alternativeContactNumber:{
        type:Number,
        default:0
    },
    personalEmail:{
        type:String,
        required:[true,"Please enter the personal email"],
        unique:true
    },
    professionalEmail:{
        type:String,
        required:[true,"Please enter your professional email"]
    },
    address:{
        type:String,
        default:"Not defined"
    },
    password:{
        type:String,
        default:""
    }
})

const Employee = mongoose.model("Employee",employeeSchema)

module.exports = Employee;