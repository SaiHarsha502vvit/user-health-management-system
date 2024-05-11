import { Router } from "express";
import { signInController } from "../controllers/signin.controller.js";

const signinRoute = Router();

signinRoute
    .post("/", signInController)
    .get("/", (req, res) => {
                console.log("Its Working !!!");
            });

export { signinRoute };
