const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.obrigatorio = (req, res, next) =>{
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).send({mensagem: "Token inválido"})
    }
}

exports.opcional = (req, res, next) =>{
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        next();

    }
}