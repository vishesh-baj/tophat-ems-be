const Employee = require("../../model/Schema/employee");

const employeeUpdateControllers = (req,res)=>{
    const {name,contactNumber,personalEmail,alternativeContactNumber} = req.body;

    // Empty fields
    if(!name || !personalEmail || !contactNumber){
        return res.status(203).json({
            message:"Name, Personal Email & Contact Number field cannot be empty"
        })
    }
    
    // Contact Number
    if(String(contactNumber).length < 10){
        return res.status(203).json({
            message:"Contact number should atleast have 10 digits"
        })
    }

    // Alternative Contact Number
    if(alternativeContactNumber){
        console.log("alternativeContactNumber")
        if(String(alternativeContactNumber).length < 10){
            return res.status(203).json({
                message:"Alternative Contact number should atleast have 10 digits"
            })
        }
    }

    // @Updating Employee
    Employee.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,result)=>{
        if(err){
            return res.status(203).json({
                message:"Please enter a valid id"
            })
        }else{
            res.status(200).json({
                message:"Updated successfully",
                result
            })
        }
    })
}

module.exports = employeeUpdateControllers;