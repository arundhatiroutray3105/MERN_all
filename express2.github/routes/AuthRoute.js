import express from 'express';
import { signIn, signUp } from '../controllers/AuthController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router=express.Router();
router.post("/signin",authMiddleware,signIn);
router.post("/signup",authMiddleware,signUp);
export default router;