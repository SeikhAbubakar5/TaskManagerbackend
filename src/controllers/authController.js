const authService =require("../services/authService")
const register= async (req,res)=>{
    try {
        const userData=req.body;

        const user=await authService.registerUser(userData)

        // console.log("user after save",user._id)
        res.status(201).json({
            message:"registered successfully",
            userId:user,
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const login=async(req,res)=>{
    try {
        const userData=req.body;

        const {token ,userId}=await authService.loginUser(userData)
        
        
        res.status(200).json({
            message:"user login success",
            token,
            userId
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// const getData=(req,res)=>{
//     res.send("youjust accessed private endpoint")
// }
module.exports={register,login};