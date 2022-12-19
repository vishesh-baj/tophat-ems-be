const jwt = require('jsonwebtoken');
const Employee = require('../../model/Schema/employee');

const testingEmployeeControllers = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    const verifyJwt = jwt.verify(token,process.env.SECRET_KEY)

    // Getting admin id through the token
    const adminId = verifyJwt.userId;

    const employee = await Employee.find({adminId:adminId})
    res.json({employee})
}

module.exports = testingEmployeeControllers;