const app=require("./app")
require("dotenv").config()
const connectDB=require("./db/db")

const port=process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`server is connected  ${port}`)
})


connectDB()