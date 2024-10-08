//mongodb://localhost:27017/
import mongoose from 'mongoose';
const ConnectionString="mongodb://127.0.0.1:27017/myFirstdb";
const mongoconnect=async ()=>{
   try{
     await mongoose.connect(ConnectionString);
     console.log("MongoDB Connected");
   }
   catch(err){
      console.log("MongoDb connection error : "+err);
   }
}
export default mongoconnect;