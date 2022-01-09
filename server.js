const http = require('http');
const Service = require('./src/services/MensagemService');


const app = require('./app') ;

const port = process.env.PORT || 3000;
const server = http.createServer(app);
const socket = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
// socket.Server(server) ;

var id;
var msg = [];
var msgy = [];

socket.on('connection', async message => {
  console.log("socket id", message.id)
  
  message.on('idPedido', async data =>{
    console.log("data", data)
    id = data;
    const result = await Service.getAll(id);
  
    message.emit(id, result);
  })
  message.on('msgReceived', async data =>{
    
    const result = await Service.create(data);
    console.log("idzinho", id)
    const result2 = await Service.getAll(id);
    message.emit(id, result2);
  
    
  })
  
  const result = await Service.getAll(id);
  
  message.emit(id, result);
  
  
  
  
})

server.listen(port, function(){
    console.log("porta: ", port)
    
    
    
});