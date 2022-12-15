const jwt = require('jsonwebtoken')

const secureApi = (req,res,next)=>{
    const headerAuth = req.headers.authorization;

    if(!headerAuth){
        return res.status(400).json({message:"No token has been provided"})
    }

    const token = headerAuth.split(' ')[1]

    if(!token){
        return res.status(400).json({
            message:"Please provide the token"
        })
    }

    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    
    if(!verifyToken){
        return res.status(400).json({
            message:"Please enter a valid token"
        })
    }

    next()
}

module.exports = secureApi;