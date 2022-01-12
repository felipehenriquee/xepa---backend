const Controller = require("../controllers/ProdutoController");
const login = require("../middleware/login")


const express = require('express');
const router = express.Router();

// cadastra um dado
router.post('/', login.obrigatorio,  Controller.store);

// retorna todos os dados
router.get('/', login.opcional , Controller.index);
router.get('/estabelecimento/:id', login.opcional , Controller.indexEstabelecimento);


// // retorna um dado
router.get('/:id', login.opcional, Controller.getById);

// edita dado
router.put('/:id', login.obrigatorio, Controller.edit);
router.put('/status/:id', login.obrigatorio, Controller.editStatus);

// apaga dado
router.delete('/:id', login.obrigatorio, Controller.delete);

module.exports = router;
