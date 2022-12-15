const Employee = require('../../model/Schema/employee')

const singleEmployeeControllers = (req,res)=>{
    Employee.findById(req.params.id,(err,result)=>{
        if(err){
            return res.status(203).json({message:"No user found"})
        }
        else return res.status(200).json({result})
    })
}

module.exports = singleEmployeeControllers;