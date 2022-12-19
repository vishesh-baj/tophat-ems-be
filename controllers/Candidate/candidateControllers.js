const Candidate = require("../../model/Schema/candidate");
const jwt = require('jsonwebtoken')

const candidateControllers = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    const verifyJwt = jwt.verify(token,process.env.SECRET_KEY)

    // Getting admin id through the token
    const adminId = verifyJwt.userId;

    const {name,email,contactNumber,technology,yearOfExperience,noticePeriod,communication,status,interviewerName,note} = req.body;

    if(!name || !email || !contactNumber || !technology){
        res.status(203)
        return res.json({
            message:"Please fill all the mandatory fields."
        })
    }

    // Contact number check
    if(contactNumber < 10){
        res.status(203)
        return res.json({
            message:"Contact Number cannot have less than 10 digits."
        })
    }

    // Check if candidate already exists
    const candidateEmail = await Candidate.findOne({email})
    const candidateContactNumber = await Candidate.findOne({contactNumber})

    if(candidateEmail){
        res.status(203)
        return res.json({
            message:"Email already exists"
        })
    }

    if(candidateContactNumber){
        res.status(203)
        return res.json({
            message:"Contact Number already exists"
        })
    }

    const saveCandidate = new Candidate({adminId,name,email,contactNumber,technology,yearOfExperience,noticePeriod,communication,status,interviewerName,note})
    saveCandidate.save()

    return res.status(200).json({
        message:"Candidate saved !!",name,email,contactNumber,technology,yearOfExperience,noticePeriod,communication,status,interviewerName,note
    })
}

module.exports = candidateControllers;