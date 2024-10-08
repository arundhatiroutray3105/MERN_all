const authMiddleware=(req,res,next)=>{
    const auth=req.headers['authorization'];
    console.log(auth);
    if(auth!=undefined){
       if(auth==="xyz"){
          next();
       }
       else{
         res.json({"err":1,"msg":"Auth is not match"});
       }
    }
    else{
       res.json({"err":1,"msg":"Headers not found"});
    }
 }
 export default authMiddleware;