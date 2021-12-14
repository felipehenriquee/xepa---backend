


const multer = require("multer")
const multerConfig = require("../config/multer")

const ImageController = require("../controllers/ImageController");
const express = require('express');
const router = express.Router();
const upload = multer(multerConfig);



// retorna todos os users
router.post('/upload', upload.single('image'), ImageController.upload);


// retorna todos os users
// router.get('/getAll', UsuarioController.getAll);

// //cadastra user
// router.post('/', UserController.store);

// // retorna um user
// router.get('/:id_user', UserController.indexById);

// router.patch('/:id_user', UserController.editUser);


// router.delete('/:id_user', UserController.delete);

module.exports = router;
