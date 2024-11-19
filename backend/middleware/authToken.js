async function authToken(req,res,next){
    try{
        const token = req.cookies?.token || req.header

        console.log("token",token)
    }catch(err){
        req.status(400).json({
            message : err.message ||  err,
            data : [],
            error : true,
            success : false
        })
    }
}

module.exports = authToken;