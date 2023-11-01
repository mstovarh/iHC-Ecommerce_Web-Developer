const express = require('express');
const router = express.Router();
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRET_KEY;

router.post('/login', async (req, res) => {
    const userData = req.body;

    const user = await User.findOne({ email: userData.email });
    if (!user) return res.status(400).json({ error: true, mensaje: 'Usuario invalido' });
   
    const validPassword = await bcrypt.compare(userData.password, user.password);
    if (!validPassword) return res.status(400).json({ error: true, mensaje: 'Usuario invalido' });

    let redirectRoute = '/home';

    if (user._id.toString() === '654036259be60465dda072fd') {
        redirectRoute = '/admin';
    }

    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, secretKey)
    
    res.header('auth-token', token).json({
        error: null,
        data: {
          token,
          location: redirectRoute
        }
    });      
})

router.post('/logup', async (req, res) => {
    const userData = req.body;

    const isEmailExist = await User.findOne({ email: userData.email });
    if (isEmailExist) {
        return res.status(400).json({ error: true, mensaje: 'Email ya registrado' });
    }

    const password = await bcrypt.hash(userData.password, 10);
    const passwordCheck = await bcrypt.hash(userData.passwordCheck, 10);    

    const newUser = new User({
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        password: password,
        emailCheck: userData.emailCheck,
        passwordCheck: passwordCheck
    });

    try {
        const savedUser = await newUser.save();
        const token = jwt.sign(
            {
                name: savedUser.name,
                lastname: savedUser.lastname,
                email: savedUser.email,
                password: savedUser.password,
                emailCheck: savedUser.emailCheck,
                passwordCheck: savedUser.passwordCheck
            },
            secretKey,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        console.error('Error al crear un usuario: ' + error);
        res.status(500).send('Error al crear un usuario.');
    }
});

module.exports = router;
