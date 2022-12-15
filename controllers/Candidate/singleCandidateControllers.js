const Candidate = require("../../model/Schema/candidate");

const singleCandidateControllers = (req,res)=>{
    Candidate.findById(req.params.id,(err,result)=>{
        if(err){
            return res.status(400).json({message:"No user found"})
        }
        else return res.json({result})
    })
}

module.exports = singleCandidateControllers;