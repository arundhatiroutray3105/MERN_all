import express from 'express';
import empModel from '../models/employeeSchema.js';
const router=express.Router();
router.post("/add",async(req,res)=>{
   try{
      let formdata=req.body;
      const newemp=new empModel(formdata);
      await newemp.save();
      res.send("Employee add successfully")
   }
   catch(err){
    res.send("Something went wrong or already exists!")
   }
})
router.get("/getall",async (req,res)=>{
    try{
        const emp=await empModel.find();
        res.send(JSON.stringify(emp))
    }
    catch(err){
        res.send("Something went wrong");
    }
})
export default router;