
const Service = require('../services/EstandeService');
const Validator = require('fastest-validator');



const v = new Validator()

module.exports = {
    // listar todos usuarios
    async index(req, res){
        console.log("deus")
        const {pageSize, order, filter, page} = req.query;
        const result = await Service.getAll(pageSize, order, filter, page);
        return res.json(result);
    },
    async getById(req, res){
        const { id } = req.params;
        const result = await Service.getOne(id);
        return res.json(result);

    },
    // cadastrar usuario
    async store(req, res){
       const {categorias} = req.body
        
        const result = await Service.create(req.body, categorias);

        
        
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
    async contaAcessos(req, res){
        const { acesso, id } = req.query;
        const result = await Service.contaAcessos(acesso, id)
    }
    
    
}