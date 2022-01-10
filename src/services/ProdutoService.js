const Modelo = require('../models/Produtos');
const estabelecimentoService = require('./EstabelecimentoService')
const { Op } = require("sequelize");

module.exports = {
    
    async create(dados){
        dados.Desconto = this.CalculaDesconto(dados.Preco_Original, dados.Preco_Promocional)
        try {
            const result = await Modelo.create( dados );
    
            const result2 = await  estabelecimentoService.editTotalProdutos(dados.Id_Estabelecimento, dados.Desconto)
            
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
    async getAllEstabelecimento(pageSize = 1000, order = "ASC", filter = "Nome", page = 0, type="todos", id){
        
        const _pagina = parseInt(page)
        const _tamanho = parseInt(pageSize)
        const condicao = {
            where: {
                Id_Estabelecimento: id
              }
        }
        
        if (type!='todos'){
            condicao = {
                where: {
                    [Op.and]: [
                        { Id_Estabelecimento: id },
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
        const {Nome, Descricao, Tipo, Imagem, Data, Peso, Preco_Original, Preco_Promocional, StartTime, EndTime, Estoque } = dados;
        try {
            const result = await Modelo.update(
                { Nome, Descricao, Tipo, Imagem, Data, Peso, Preco_Original, Preco_Promocional, StartTime, EndTime, Estoque } ,
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
    CalculaDesconto(original, promocional){
        return Math.round((promocional*100)/original)
    }
    
    
}