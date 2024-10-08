import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/ProductController.js';
const router=express.Router();
router.get("/getproducts",getAllProducts);
router.get("/productbyid/:id",getProductById);
router.post("/addproduct",addProduct);
router.delete("/deleteproduct/:id",deleteProduct);
router.put("/updateproduct/:id",updateProduct);
export default router;