import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:15
    }
},{timestamps:true})


export const UserLoginDetails=mongoose.model("UserLoginDetails",userScheme)