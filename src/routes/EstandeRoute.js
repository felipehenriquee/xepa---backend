const Controller = require("../controllers/EstandeController");

const express = require('express');
const router = express.Router();

// cadastra um dado
router.post('/', Controller.store);

// retorna todos os dados
router.get('/', Controller.index);
router.get('/acesso', Controller.contaAcessos);

// // retorna um dado
router.get('/:id', Controller.getById);

// edita dado
router.put('/:id', Controller.edit);

// apaga dado
router.delete('/:id', Controller.delete);

module.exports = router;
