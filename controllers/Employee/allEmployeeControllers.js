const Employee = require("../../model/Schema/employee");

const allEmployeeControllers = (req,res)=>{
    Employee.find((error,result)=>{
        if(error){
            res.status(400).json({message:"Some error occured !! Please try again in some time"})
        }else{
            res.status(200).json({result})
        }
    })
}

module.exports = allEmployeeControllers;