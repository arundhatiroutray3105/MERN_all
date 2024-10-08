import express from 'express';
const router =express.Router();
router.get("/",(req,res)=>{
    res.send("Main route");
})
router.get("/about",(req,res)=>{
    res.send("about");
})
export default router;