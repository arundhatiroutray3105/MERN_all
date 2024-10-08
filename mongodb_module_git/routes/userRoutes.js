/*import express from 'express';
import userModel from './models/UsersSchema.js';
const router=express.Router();

router.post("/register",async(req,res)=>{
    /*let formdata=req.body;
    console.log(formdata);
    res.send(JSON.stringify(formdata));*//*
    try{
        let formdata=req.body;
        const newUser=new userModel(formdata);
        await newUser.save();
        res.send("User Registered Successfully")
     }
     catch(err){
        console.log(err);
         res.send("Something went wrong or already exists")
     }
})
export default router;*/
import express from 'express';
import userModel from '../models/UsersSchema.js';
const router=express.Router();
//store users in db
router.post("/register",async (req,res)=>{
    try{
       let formdata=req.body;
       const newUser=new userModel(formdata);
       await newUser.save();
      // res.send(newUser);
       res.send("User Registered Successfully")
    }
    catch(err){
        console.log(err);
        res.send("Something went wrong or already exists")
    }
})
//get users from db
router.get("/fetchall",async (req,res)=>{
    try{
       let users= await userModel.find();
       res.send(JSON.stringify(users));
    }
    catch(err){
        res.send("Something went wrong!")
    }
})
//get user from db in behalf of id
router.get("/fetchuser/:id",async (req,res)=>{
    try{
        let id=req.params.id;
        let user= await userModel.findById(id);
        res.send(JSON.stringify(user));
    }
    catch(err){
        res.send("Something went wrong!")
    }
})
//delete user from db 
router.delete("/delete/:id",async (req,res)=>{
    try{
       let id=req.params.id;
       await userModel.findByIdAndDelete(id);
       res.send("User Deleted")
    }
    catch(err){
        res.send("Something went wrong !")
    }
})
//update user 
router.put("/updateuser/:id",async (req,res)=>{
    try{
        let id=req.params.id;
        let formdata=req.body;
         await userModel.findByIdAndUpdate(id,formdata);
         res.send("User Updated")
    }
    catch(err){
        res.send("Something went wrong");
    }
})
export default router;