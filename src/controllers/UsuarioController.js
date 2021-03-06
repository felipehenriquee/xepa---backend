
const Service = require('../services/UsuarioService');
const Validator = require('fastest-validator');
const jwt = require('jsonwebtoken')


const v = new Validator()

module.exports = {
    // listar todos usuarios
    async index(req, res){
        const {pageSize, order, filter, page, type} = req.query;
        const result = await Service.getAll(pageSize, order, filter, page, type);
        return res.json(result);
    },
    async getById(req, res){
        const { id } = req.params;
        const result = await Service.getOne(id);
        return res.json(result);

    },
    // cadastrar usuario
    async store(req, res){
       
        
        const result = await Service.create(req.body);

        
        
        return res.json(result)
 
    },
    // // apaga user
    async delete(req, res){
        const { id } = req.params;
        
        const result = await Service.delete(id);
        
        return res.json(result)

    },
    async edit(req, res){
        const {id} = req.params;
        const result = await Service.edit(req.body, id);
        return res.json(result);
    },
    async login(req, res){
        const { Email, Senha } = req.body;
        const result = await Service.login(Email, Senha);
        
        return res.json(result);

    }
    
    
}