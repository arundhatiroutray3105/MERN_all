const getAllProducts=(req,res)=>{
    res.json({"err":0,"msg":"All Products "+req.title})
}
const getProductById=(req,res)=>{
    res.json({"err":0,"msg":"Product By Id "+req.title})
}
const addProduct=(req,res)=>{
    res.json({"err":0,"msg":"Product Added"})
}
const deleteProduct=(req,res)=>{
    res.json({"err":0,"msg":"Product Deleted"})
}
const updateProduct=(req,res)=>{
    res.json({"err":0,"msg":"Product Updated"})
}
export {getAllProducts,getProductById,addProduct,deleteProduct,updateProduct};