import express from 'express';//import express module 
//import all routes
import mainRoutes from './routes/MainRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import adminRoutes from './routes/AdminRoutes.js';
const PORT=7788;//define port 
const app=express();// create instance of the express 
app.use(express.json());//parse body data
//call all routes 
app.use("/",mainRoutes);
app.use("/users",userRoutes);
app.use("/admin",adminRoutes);
//handle not found 
app.use((req,res)=>{
     res.send("No route found");
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on port ${PORT}`);
})