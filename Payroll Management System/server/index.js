import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";
import { employeeRouter } from "./Routes/EmployeeRoute.js";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";


const app= express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST','PUT', 'DELETE '],
    credentials: true
}))
app.use(express.json())
app.use('/auth',adminRouter)
app.use('/employee',employeeRouter)

app.listen(3000,()=>{
    console.log("server is running")
})