const Employee = require("../../model/Schema/employee");

const employeeControllers = async (req,res)=>{
    const {name,contactNumber,alternativeContactNumber,personalEmail,professionalEmail,address,password} = req.body;

    if(!name || !contactNumber || !personalEmail){
        return res.status(203).json({
            message:"Name, personal Email and conatact number are mandatory"
        })
    }
    
    if(String(contactNumber).length < 10){
        return res.status(203).json({
            message:"Contact number cannot have less than 10 digits"
        })
    }

    // Check if already exists
    const employeeContact = await Employee.findOne({contactNumber})
    const employeePEmail = await Employee.findOne({personalEmail})

    if(employeeContact){
        res.status(203).json({
            message:"Contact number already exists."
        })
    }

    if(employeePEmail){
        res.status(203).json({
            message:"Personal Email already exists."
        })
    }

    // Saving data in database
    const saveEmployee = new Employee({name,contactNumber,alternativeContactNumber,personalEmail,professionalEmail,address,password})

    saveEmployee.save()

    return res.status(200).json({
        message:"Data saved successfully"
    })

}

module.exports = employeeControllers;