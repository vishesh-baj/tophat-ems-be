const Attendence = require("../../model/Schema/attendence");
const Employee = require("../../model/Schema/employee");

const attendenceControllers = async (req,res)=>{
    // date time month
    const date = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const status = req.body.status; // full-day, half-day, leave
    const employeeId = req.body.employeeId; //  taking employee id from the frontend

    if(!status){
        res.status(203)
        return res.json({
            message:"Status is mandatory"
        })
    }

    if(!employeeId){
        res.status(203)
        return res.json({
            message:"Employee Id is mandatory"
        })
    }

    const employeeData = await Employee.findById({_id:employeeId})
    if(!employeeData){
        res.status(203)
        return res.json({
            message:"Invalid User Id"
        })
    }
    const employeeName = employeeData.name;

    // Check if already exists
    const employeeExistsCheck = await Attendence.findOne({employeeId:employeeId,date:date,month:month,year:year})

    if(employeeExistsCheck){
        res.status(203)
        return res.json({
            message:"Data already exists"
        })
    }

    // Saving attendence
    const saveAttendence = new Attendence({date,month,year,status,employeeId,employeeName})
    saveAttendence.save()

    res.status(200).json({
        message:"Attendence marked successfully"
    })
}

module.exports = attendenceControllers;