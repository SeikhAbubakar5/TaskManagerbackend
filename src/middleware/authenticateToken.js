const jwt=require('jsonwebtoken')

const authenticateToken= (req,res,next)=>{
    // console.log("I am middleware some body trying to access");
    // next();

    const  authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];


    if(token == null) res.sendStatus(401) // unauthorised

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403) //forbidden

        req.user=user;
        //console.log("User in middleware",user)

        next();
    })
    
    };
module.exports=authenticateToken;
