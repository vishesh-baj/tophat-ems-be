const Employee = require("../../model/Schema/employee");

const deleteEmployeeControllers = (req,res)=>{
    Employee.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.status(200).json({
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

module.exports = deleteEmployeeControllers;