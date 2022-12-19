const Attendence = require("../../model/Schema/attendence")

const getAllAttendenceControllers = async(req,res)=>{
    const allData = await Attendence.find()
    res.status(200).json({
        allData
    })
}

module.exports = getAllAttendenceControllers