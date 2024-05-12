import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { signinRoute } from './routes/signin.routes.js'
import { singupRoute } from './routes/singup.routes.js'
import databaseConnection from './database/db.js'
import mongoose from 'mongoose'

dotenv.config({
    path:'./env' /* we used this method inorder to load the env variables before execution of any file or code 
                    so that env variables are available for every file */
})

databaseConnection()

const app=express()



app.use(express.json({limit:"1mb"})) // When Front-End  gives us the Json file to accept it we use this method and limit is set 
app.use(express.urlencoded({extended:true}))  /* This is used to ensure that our URL is encoded like url https://www.youtube.com/shorts/0JUOLk-Uj1Y to do it
                                                  Basically used to encode data in URL 
                                                  here we used extended is true so that we can encode 
                                                  nested objects */
app.use(express.static("public")) // we use this inorder to store files of some pic, pdfs    etc and all that on server use some folder here we have given that folder name 
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173', // From where the data Should come generally Frontend so We give front end URL
    credentials:true
}))

//  Routes

app.use("/api/v1/singup",singupRoute)
app.use("/api/v1/signin",signinRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Port Listening at ${process.env.PORT}`)
})

