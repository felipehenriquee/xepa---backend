const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const  images = require("../models/Images");
const  estandes = require("../models/Standes");
const  usuario = require("../models/Usuarios");
const  estabelecimento = require("../models/Estabelecimentos");
const  produto = require("../models/Produtos");
const  compra = require("../models/Compras");
const  mensagem = require("../models/Mensagens");
const  compraproduto = require("../models/CompraProduto");

const connection = new Sequelize(dbConfig);

images.init(connection);
estandes.init(connection);
usuario.init(connection);
estabelecimento.init(connection);
produto.init(connection);
compra.init(connection);
mensagem.init(connection);
compraproduto.init(connection);

estandes.associate(connection.models)
images.associate(connection.models)
produto.associate(connection.models)
compra.associate(connection.models)
mensagem.associate(connection.models)




// User.associate(connection.models)


module.exports = connection;