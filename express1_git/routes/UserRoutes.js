import express from 'express';
const router =express.Router();
router.get("/",(req,res)=>{
    res.send("user default route");
})
router.get("/fetchusers",(req,res)=>{
    res.send("Fetch all users");
})
router.post("/adduser",(req,res)=>{
    //get data from post routes (body data)
    const userData=req.body;
    console.log(userData);
    res.send(JSON.stringify(userData));
})
export default router;