import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { signinRoute } from './routes/signup.routes'
dotenv.config({
    path:'./env' /* we used this method inorder to load the env variables before execution of any file or code 
                    so that env variables are available for every file */
})

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN, // From where the data Should come generally Frontend so We give front end URL
    credentials:true
}))

app.use(express.json({limit:"1mb"})) // When Front-End  gives us the Json file to accept it we use this method and limit is set 
app.use(express.urlencoded({extended:true}))  /* This is used to ensure that our URL is encoded like url https://www.youtube.com/shorts/0JUOLk-Uj1Y to do it
                                                  Basically used to encode data in URL 
                                                  here we used extended is true so that we can encode 
                                                  nested objects */
app.use(express.static("public")) // we use this inorder to store files of some pic, pdfs    etc and all that on server use some folder here we have given that folder name 
app.use(cookieParser())

//  Routes


app.use(signinRoute)


app.listen(8000,()=>{
    console.log(`Port Listening at ${8000}`)
})
