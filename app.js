const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
var cors = require('cors')

const rotaImage = require('./src/routes/ImageRoute');
const rotaEstande = require('./src/routes/EstandeRoute');
const rotaUsuario = require('./src/routes/UsuarioRoute');
const rotaEstabelecimento = require('./src/routes/EstabelecimentoRoute');
const rotaProduto = require('./src/routes/ProdutoRoute');
const rotaCompra = require('./src/routes/CompraRoute');



require('./src/database');
const app = express();

app.use(morgan('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb', extended: false }));
app.use(express.json());


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    accessControlAllowMethods: 'PUT, POST, PATCH, DELETE, GET'
  }

app.use(cors(corsOptions))

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Header',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );

//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).send({});
//     }
//     next();
// });



// app.use('/api/image', rotaImage);

// app.use('/api/estande', rotaEstande);
app.use('/api/usuario', rotaUsuario);
app.use('/api/estabelecimento', rotaEstabelecimento);
app.use('/api/produto', rotaProduto);
app.use('/api/compra', rotaCompra);


// rota not found
app.use((req, res, next)=>{
    const erro = new Error("Não encontrado");
    erro.status = 404 ;
    next(erro);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})
module.exports = app;