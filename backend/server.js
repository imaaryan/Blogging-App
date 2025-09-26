import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/connectDB.js";

const app = express()
dotenv.config()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => {
  res.send('Server is Running')
})

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server is Running on PORT " + PORT)
})

export default app;
