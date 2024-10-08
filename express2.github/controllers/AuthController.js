const signIn=(req,res)=>{
    res.json({"err":0,"msg":"Login Success"})
}
const signUp=(req,res)=>{
    res.json({"err":0,"msg":"User Registered"})
}
export {signIn,signUp};