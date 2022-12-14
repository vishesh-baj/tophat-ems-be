const Candidate = require("../../model/Schema/candidate");

const deleteCandidateControllers = (req,res)=>{
    Candidate.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.status(203).json({
                message:"Please enter a valid id"
            })
        }else{
            res.status(200).json({
                message:"Deleted successfully",
                result
            })
        }
    })
}

module.exports = deleteCandidateControllers;