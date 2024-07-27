import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`Server running at port: ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed........!!", error)
    })




//...................second approach.......................................
/*
import mongoose from 'mongoose';
import { DB_NAME } from "./constants"
import express from 'express'
const app = express()
    (async () => {
        try {
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERRR: ", error);
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            })

        } catch (error) {
            console.error("Error", error)
            throw err
        }
    })()*/