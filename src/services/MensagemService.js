const Modelo = require('../models/Mensagens');
const { Op } = require("sequelize");

module.exports = {
    
    async create(dados){
        console.log(dados)
       const {Mensagem, Id_Produto, Id_Compra, Cancelar, Icone, Quem} = dados;
       
        try {
            
            const result = await Modelo.create({Mensagem, Id_Produto, Id_Compra, Cancelar, Icone, Quem} );
        
            console.log(result)
            return (result);
        } catch (error) {
            
            
            return error
        }

        
    },
    
    async getAll(id="xxx"){
        
        console.log("id", id)
        const condicao = {
            
        }
       

        try {
            const result = await Modelo.findAll({
                where: {
                    Id_Compra: id
                  }
            });
            
            return ({status:200, result:{rows:result}});
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
                    Id_Pedido: id
                }
            });
            return ({status:200, mensagem:"apagado com sucesso"});
        } catch (error) {
            return error
        }
    },
    
    
    
    
}