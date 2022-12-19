const mongoose = require('mongoose')

const attendenceSchema = mongoose.Schema({
    date:{
        type:Number,
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    employeeId:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        required:true
    }
})

const Attendence = mongoose.model('Attendence',attendenceSchema)

module.exports = Attendence;