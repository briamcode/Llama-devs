const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

async function userLoginController(req, res) {
  try {
    const { email, password } = req.body; 

    if (!email || !password) {
      return res.status(400).json({ message: 'Por favor, ingresa un email y una contraseña' });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      'secretKey', 
      { expiresIn: '1h' } 
    );

    
    res.json({
      success: true,
      message: 'Login exitoso',
      token,
      user: { email: user.email, role: user.role },
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
}

module.exports = userLoginController;

