import mongoose from "mongoose";
const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    }
},{timestamps:true});
const empModel=mongoose.model("employee",empSchema);
export default empModel;