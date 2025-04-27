import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import  connectDB  from './utils/db.js';
dotenv.config();

connectDB();
const app = express();
const port=process.env.PORT ||3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})