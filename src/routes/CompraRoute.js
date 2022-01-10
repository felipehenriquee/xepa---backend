const Controller = require("../controllers/CompraController");


const express = require('express');
const router = express.Router();
const login = require("../middleware/login")


// cadastra um dado
router.post('/', login.obrigatorio, Controller.store);

// retorna todos os dados

router.get('/getall/:id', login.obrigatorio, Controller.index);


// // retorna um dado
router.get('/:id', login.obrigatorio, Controller.getById);

// edita dado
router.put('/:id', login.obrigatorio, Controller.edit);

// apaga dado
router.delete('/:id', login.obrigatorio, Controller.delete);

module.exports = router;
