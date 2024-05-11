import mongoose from 'mongoose';
import validator from 'validator';
const signInController=async (req,res)=>{
    const {user_email,password}=req.body;
    console.log(user_email)  
    console.log("Nooooo")
    if ([user_email,password].some(     // validation - not empty
        (field)=> field?.trim()===""))  {
        res.json({
            operation: "Failed",
            message: "User email and password are required"
        }).status(400);
    }
    else if (!validator.isEmail(user_email)) {
        res.json({
            operation: "Failed",
            message: "User email is not valid"
        }).status(400);
    } else {
        console.log(`The User email id is ${user_email}`);
        res.json({
            operation: "Success",
            message: "User email is valid"
        }).status(200);
    }
}

export {signInController}