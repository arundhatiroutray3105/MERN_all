import express from 'express';
import mongoconnect from './dbconnection.js';
import userRoutes from './routes/userRoutes.js';
import userModel from './models/UsersSchema.js';
import empModel from './models/employeeSchema.js';
import empRoutes from './routes/employeeRoutes.js'
const PORT=8899;
const app=express();

//check for json data input
app.use(express.json());
mongoconnect();
app.get('/',(req,res)=>{
    res.end('ser ther is currently working');
})
//check for json data input
app.use('/users',userRoutes);
app.use('/employee',empRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is currently working in the${PORT}`);
})