const express =require("express")
const cors = require("cors")

const cookieParser=require("cookie-parser")
const app=express()
const auth=require("./routes/auth.route")
const userModel=require("./models/user.model")
const musicRouter=require("./routes/music.route")

require("dotenv").config()

app.use(cors({ 
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'],
  credentials: true 
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",auth)
app.use("/api/music",musicRouter)


module.exports=app