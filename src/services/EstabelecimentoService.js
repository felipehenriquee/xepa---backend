const Modelo = require('../models/Estabelecimentos');
const { Op } = require("sequelize");

module.exports = {
    
    async create(dados){
       
        
        
        
        try {
            const result = await Modelo.create( dados );
        
            
            return (result);
        } catch (error) {
            
            
            return error
        }

        
    },
    
    
    async getAll(pageSize = 1000, order = "ASC", filter = "Nome", page = 0, type="todos"){
        
        const _pagina = parseInt(page)
        const _tamanho = parseInt(pageSize)
        const condicao = {
            where: {
                
              }
        }
        console.log(condicao)
        if (type!='todos'){
            condicao = {
                where: {
                      Tipo: type,
                  }
            }
        }

        try {
            const result = await Modelo.findAll({
                
                
                order: [
                    [filter, order],
                ],
                limit: _tamanho,
                offset: _pagina*_tamanho,
                // include:[{association:"images", through:{attributes:[]}}],
                condicao
            });
            
            return ({status:200, result:{rows:result}});
        } catch (error) {
            console.log(error)
            return ({status:400, error});
        }
    },
    async getAllUser(pageSize = 1000, order = "ASC", filter = "Nome", page = 0, type="todos", id){
        
        const _pagina = parseInt(page)
        const _tamanho = parseInt(pageSize)
        const condicao = {
            where: {
                Id_Usuario: id
              }
        }
        console.log(condicao)
        if (type!='todos'){
            condicao = {
                where: {
                    [Op.and]: [
                        { Id_Usuario: id },
                        { Tipo: type }
                      ]
                  }
            }
        }

        try {
            const result = await Modelo.findAll({
                
                
                order: [
                    [filter, order],
                ],
                limit: _tamanho,
                offset: _pagina*_tamanho,
                // include:[{association:"images", through:{attributes:[]}}],
                condicao
            });
            
            return ({status:200, result:{rows:result}});
        } catch (error) {
            console.log(error)
            return ({status:400, error});
        }
    },
    async getOne(id){
        console.log("id", id)
        try {

            const result = await Modelo.findByPk( id,{
               
                // include:[ 
                // {association:"images", through:{attributes:[]}},],
                
            })
           
            console.log(result)
            return ({status:200, result});
        } catch (error) {
            console.log(error)
            return ({status:400, error});
        }
    }
    ,
    async delete(id){
        try {
            const result = await Modelo.destroy({
                where: {
                    Id: id
                }
            });
            return ({status:200, mensagem:"apagado com sucesso"});
        } catch (error) {
            return error
        }
    },
    async edit(dados, id){
        const { Nome, Imagem, Tipo, Cep, Logradouro, Bairro, Localidade, Uf, Complemento, Numero, Telefone } = dados;
        try {
            const result = await Modelo.update(
                { Nome, Imagem, Tipo, Cep, Logradouro, Bairro, Localidade, Uf, Complemento, Numero, Telefone } ,
                {
                    where:{
                        Id: id
                    }
                }
                );
                

            return ({status:200, result});
        } catch (error) {
            
            console.log(error)
            return error
        }

        
    },
    
    
    
}