const Candidate = require("../../model/Schema/candidate");

const allCandidateControllers = (req,res)=>{
    Candidate.find((error,result)=>{
        if(error){
            res.status(400).json({message:"Some error occured !! Please try again in some time"})
        }else{
            res.status(200).json({result})
        }
    })
}

module.exports = allCandidateControllers;