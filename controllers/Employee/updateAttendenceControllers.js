const Attendence = require("../../model/Schema/attendence");

const updateAttendenceControllers = async (req,res)=>{
    const _id = req.body.attendenceId;

    const data = await Attendence.findByIdAndUpdate(_id,{new:true},req.body)

    console.log(data)
}

module.exports = updateAttendenceControllers;