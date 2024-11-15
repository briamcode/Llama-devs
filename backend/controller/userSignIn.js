const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");

async function userLoginController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("please provide email");
        }
        if (!password) {
            throw new Error("please provide password");
        }

        // Buscar el usuario en la base de datos por email
        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        // Verificar la contraseña ingresada con la almacenada-hasheada
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        // Si la contraseña es válida, se realiza el login
        res.json({
            message: "Login successful",
            success: true
        });

    } catch (err) {
        res.json({
            message: err.message || "Error during login",
            error: true,
            success: false
        });
    }
}
