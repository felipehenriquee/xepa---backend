
const Service = require('../services/ProdutoService');
const Validator = require('fastest-validator');



const v = new Validator()

module.exports = {
    // listar todos usuarios
    async index(req, res){
        const {pageSize, order, filter, page, type} = req.query;
        const result = await Service.getAll(pageSize, order, filter, page, type);
        return res.json(result);
    },
    async indexEstabelecimento(req, res){
        const {pageSize, order, filter, page, type} = req.query;
        const {id} = req.params;
        const result = await Service.getAllEstabelecimento(pageSize, order, filter, page, type, id);
        return res.json(result);
    },
    async getAllEstabelecimentoAdmin(req, res){
        const {pageSize, order, filter, page, type} = req.query;
        const {id} = req.params;
        const result = await Service.getAllEstabelecimentoAdmin(pageSize, order, filter, page, type, id);
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

        console.log(result)
        
        
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
    async editStatus(req, res){
        console.log("tenta editar")
        const {id} = req.params;
        const result = await Service.editStatus(req.body, id);
        console.log(result)
        return res.json(result);
    },
    
    
    
}