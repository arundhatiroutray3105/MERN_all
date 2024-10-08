import express from 'express';
import authRoutes from './routes/AuthRoute.js';
import productRoutes from './routes/ProductRoute.js';
const PORT=7788;
const app=express();
app.use(express.json());
app.use("/images",express.static('uploads'));//can be accesed via images and then it redirects to uploads
//app.use(express.static('uploads'));
//middleware
const mymiddleware=(req,res,next)=>{
    req.title="Ecommerce Application";
    next();
}
app.use(mymiddleware);
app.use("/api/auth",authRoutes);//http://localhost:8899/api/auth/signin
app.use("/api/product",productRoutes);//http://localhost:8899/api/product/getproducts
//not found route 
/*app.use((req,res)=>{
    res.json({"err":1,"msg":"No match route found"});
})*/
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is currently working on ${PORT}`);
})