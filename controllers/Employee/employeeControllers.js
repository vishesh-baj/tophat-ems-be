const Employee = require("../../model/Schema/employee");
const jwt = require('jsonwebtoken')

const employeeControllers = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    const verifyJwt = jwt.verify(token,process.env.SECRET_KEY)

    // Getting admin id through the token
    const adminId = verifyJwt.userId;

    const {name,contactNumber,alternativeContactNumber,personalEmail,professionalEmail,address,password} = req.body;

    if(!name || !contactNumber || !personalEmail || !professionalEmail){
        res.status(203)
        return res.json({
            message:"Name, personal Email, professional Email and conatact number are mandatory"
        })
    }
    
    if(String(contactNumber).length < 10){
        res.status(203)
        return res.json({
            message:"Contact number cannot have less than 10 digits"
        })
    }

    // Check if already exists
    const employeeContact = await Employee.findOne({contactNumber})
    const employeePEmail = await Employee.findOne({personalEmail})
    const employeeProfessionalEmail = await Employee.findOne({professionalEmail})

    if(employeeContact){
        res.status(203)
        return res.json({
            message:"Contact number already exists."         
        })
    }

    if(employeePEmail){
        res.status(203)
        return res.json({
            message:"Personal Email already exists."
        })
    }

    if(employeeProfessionalEmail){
        res.status(203)
        return res.json({
            message:"Professional Email already exists."
        })
    }

    // Saving data in database
    const saveEmployee = new Employee({adminId,name,contactNumber,alternativeContactNumber,personalEmail,professionalEmail,address,password})

    saveEmployee.save()

    return res.status(200).json({
        message:"Data saved successfully"
    })

}

module.exports = employeeControllers;