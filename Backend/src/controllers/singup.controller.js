import mongoose from "mongoose";
import { UserLoginDetails } from "../models/Signup.model.js";
import validator from 'validator';
import { ApiError } from "../utils/ApiError.js";
const signUpController = async (req, res) => {
    let firstname=req.body.firstName
    let lastname=req.body.lastName
    let user_email=req.body.email
    let userpassword=req.body.password
    if (!validator.isEmail(user_email)) {
        return res.json({
            operation: "Failed",
            message: "useremail is not valid"
        }).status(400);
    }
    else if (userpassword.length <  6){
        return res.json({
            operation: "Failed",
            message: "Password must be at least 6 characters long"
        }).status(400);
    }
    else {
        try {
            let user = new UserLoginDetails({
                FirstName: firstname,
                LastName: lastname,
                email: user_email,
                password: userpassword
            });
            await user.save();
            return res.json({
                operation: "Success",
                message: "User registered successfully"
            }).status(200);
        } catch (error) {
            return res.json({
                operation: "Failed",
                message: error.message
            }).status(500);
        }
    }
}

export { signUpController };