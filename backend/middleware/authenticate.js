const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')

const authenticate = (req,res,next) => {
    const authheader = req.headers.authorization;
    if(!authheader || !authheader.startsWith('Bearer ')){
        return res.status(403).json({
            message : "No token data or wrong format"   
        })
    }

    const token = authheader.split(' ')[1];
    try{
        const verify = jwt.verify(token, JWT_SECRET);
        req.userId = verify.userId;
        next();
    }catch(err){
        return res.status(403).json({
            message : "Wrong Token data"
        })
    }
}

module.exports = {
    authenticate
}