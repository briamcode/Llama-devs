const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

async function userSignUpController(req, res) {
    try {
        const { email, password, firstName, lastName } = req.body;

        console.log("req.body",req.body)

        if (!email) {
            throw new Error("please provide email");
        }
        if (!password) {
            throw new Error("please provide password");
        }
        if (!firstName) {
            throw new Error("please provide firstName");
        }
        if (!lastName) {
            throw new Error("please provide lastName");
        }

        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userData = new userModel({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });

        await userData.save();

        res.json({
            message: "User created successfully",
            success: true
        });

    } catch (err) {
        res.json({
            message: err.message || "Error creating user",
            error: true,
            success: false
        });
    }
}

module.exports = userSignUpController