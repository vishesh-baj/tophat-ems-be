const mongoose = require('mongoose')

const candidateSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please fill the name field"]
    },
    email:{
        type:String,
        required:[true,"Please fill the email field"]
    },
    contactNumber:{
        type:Number,
        required:[true,"Please fill the contact number field"]
    },
    technology:{
        type:String,
        required:[true,"Please fill the technology field"]
    },
    yearOfExperience:{
        type:String,
        default:0
    },
    noticePeriod:{
        type:String,
        default:0
    },
    communication:{
        type:String,
        default:"Not mentioned"
    },
    status:{
        type:String,
        default:"Not mentioned"
    },
    interviewerName:{
        type:String,
        default:"Not mentioned"
    },
    note:{
        type:String,
        default:"Not mentioned"
    }
},{timestamps:true})

const Candidate = mongoose.model('Candidate',candidateSchema)

module.exports = Candidate;