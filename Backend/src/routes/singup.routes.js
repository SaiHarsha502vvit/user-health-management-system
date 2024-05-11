import { Router } from "express";
import { signUpController } from "../controllers/singup.controller.js";
import express from 'express'
const singupRoute=Router()


singupRoute.post('/',signUpController).get('/',express.json(),(req,res)=>{
    const {data} = req.body
    console.log(data)
    res.json({
        success:"okey done"
    }).status(200)
})

export {singupRoute}