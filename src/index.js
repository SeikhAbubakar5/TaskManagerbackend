require('dotenv').config({path:"src/.env"})
const express = require ('express');

const mongoose=require('mongoose')
const app=express();
const authRoutes=require("./routes/authRoutes")
const taskRoutes=require("./routes/taskRoutes")
const cors=require("cors")

const PORT=process.env.PORT || 5000 ;

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)
//connected to db
mongoose.connect(process.env.MONGODB_URI,{
}).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req ,res)=>{
    res.send("backend is listining")
})


app.listen(PORT ,()=>{
    console.log(`server listening at port ${PORT}`)
})