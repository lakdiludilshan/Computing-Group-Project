const jwt = require('jsonwebtoken');

const authMiddleware = async(request,response,next)=>{
    const authorizationHeader =await  request.headers.authorization;
try {
    if(authorizationHeader){
        const token = await authorizationHeader.split(" ")[1]
        if(token){
            const verifyUser = await jwt.verify(token,process.env.SECRET_KEY);
            if(verifyUser){
                request.user = verifyUser;
                next();
        }else{
            return response.status(401).json({
                message:"invalid user credntials"
            })
        }
    }else{
        return response.status(401).json({
            message:"token not found"
        })
    }
    
}
} catch (error) {
    return response.status(400).json({
        message:"token is not valid",
        error:error.message
    })
}
}

module.exports = authMiddleware