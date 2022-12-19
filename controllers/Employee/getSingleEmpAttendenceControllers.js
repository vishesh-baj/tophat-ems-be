const Attendence = require("../../model/Schema/attendence")

const getSingleEmpAttendenceControllers = async (req,res)=>{
    const employeeId = req.body.employeeId;
    if(!employeeId){
        res.status(203).json({
            message:"Please send an employee id"
        })
    }
    const data = await Attendence.find({employeeId})

    return res.status(200).json({data})
}

module.exports = getSingleEmpAttendenceControllers