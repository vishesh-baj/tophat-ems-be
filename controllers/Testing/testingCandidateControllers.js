const jwt = require('jsonwebtoken');
const Candidate = require('../../model/Schema/candidate');

const testingCandidateControllers = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    const verifyJwt = jwt.verify(token,process.env.SECRET_KEY)

    // Getting admin id through the token
    const adminId = verifyJwt.userId;

    // Get Candidates
    const candidate = await Candidate.find({adminId:adminId})
    res.json({candidate})
}

module.exports = testingCandidateControllers