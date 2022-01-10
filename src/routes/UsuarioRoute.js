const Controller = require("../controllers/UsuarioController");


const express = require('express');
const router = express.Router();
const login = require("../middleware/login")

// cadastra um dado
router.post('/', login.opcional, Controller.store);
router.post('/login', login.opcional, Controller.login);

// retorna todos os dados
router.get('/', login.opcional, Controller.index);


// // retorna um dado
router.get('/:id', login.opcional, Controller.getById);

// edita dado
router.put('/:id', login.obrigatorio, Controller.edit);

// apaga dado
router.delete('/:id', login.obrigatorio, Controller.delete);

module.exports = router;
