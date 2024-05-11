import validator from "validator";

const signUpController = async (req, res) => {
    const { firstname, lastname , email , password } = req.body;
    if ([username,email,fullname,password].some(     // validation - not empty
        (field)=> field?.trim()==="")) {
            res.json({
                operation: "Failed",
                message: "First Name, Last Name, Email and Password are required"
            }).status(400);
        }
    else if (!validator.isEmail(email)) {
        res.json({
            operation: "Failed",
            message: "Email is not valid"
        }).status(400);
    }
    else {
        console.log(`The User email id is ${email}`);

        res.json({
            operation: "Success",
            message: "User email is valid"
        }).status(200);
    }
};

export { signUpController };