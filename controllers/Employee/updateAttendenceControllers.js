const Attendence = require("../../model/Schema/attendence");

const updateAttendenceControllers = async (req,res)=>{
    const _id = req.body.attendenceId;

    const updated = {
        date:req.body.date,
        month:req.body.month,
        year:req.body.year,
        status:req.body.status
    }
    
    Attendence.findByIdAndUpdate(_id,updated,(err,result)=>{
        if(err) return console.log(err)
        res.status(200)
        return res.json({
            message:"Attendence updated successfully"
        })
    })
}

module.exports = updateAttendenceControllers;