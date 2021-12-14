const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const  images = require("../models/Images");
const  estandes = require("../models/Standes");
const  usuario = require("../models/Usuarios");
const  estabelecimento = require("../models/Estabelecimentos");
const  produto = require("../models/Produtos");

const connection = new Sequelize(dbConfig);

images.init(connection);
estandes.init(connection);
usuario.init(connection);
estabelecimento.init(connection);
produto.init(connection);

estandes.associate(connection.models)
images.associate(connection.models)
produto.associate(connection.models)




// User.associate(connection.models)


module.exports = connection;