import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("Database is Connected")
    }).catch(()=>{
        console.error(error, "Failed to Connect DB")
    })
};

export default connectDB;