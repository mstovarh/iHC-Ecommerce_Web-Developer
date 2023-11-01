const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY;
const path = require('path');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    /* if (!token) return res.status(401).json({ error: 'Acceso denegado' }) */
    if (!token) {
        return res.status(401).sendFile(path.resolve('./public/401.html'));
    }
    try {
        const verified = jwt.verify(token, secretKey)
        req.user = verified
        next() 
    } catch (error) {
        res.status(400).json({error: 'Token no válido'})
    }
}

module.exports = verifyToken;