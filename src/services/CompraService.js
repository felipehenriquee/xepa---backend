const Modelo = require('../models/Compras');
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
    
    
    // async getAll(pageSize = 1000, order = "ASC", filter = "Id", page = 0, type="estabelecimento"){
        
    //     const _pagina = parseInt(page)
    //     const _tamanho = parseInt(pageSize)
    //     const condicao = {
    //         where: {
                
    //           }
    //     }
    //     console.log(condicao)
    //     if (type!='todos'){
    //         condicao = {
    //             where: {
    //                   Tipo: type,
    //               }
    //         }
    //     }

    //     try {
    //         const result = await Modelo.findAll({
                
                
    //             order: [
    //                 [filter, order],
    //             ],
    //             limit: _tamanho,
    //             offset: _pagina*_tamanho,
    //             // include:[{association:"images", through:{attributes:[]}}],
    //             condicao
    //         });
            
    //         return ({status:200, result:{rows:result}});
    //     } catch (error) {
    //         console.log(error)
    //         return ({status:400, error});
    //     }
    // },
    async getAll(pageSize = 1000, order = "DESC", filter = "CreatedAt", page = 0, type="estabelecimento", id){
        
        const _pagina = parseInt(page)
        const _tamanho = parseInt(pageSize)
        const condicao = {
            where: {
                Id_Estabelecimento: id
              }
        }
        if (type=='usuario'){
            condicao = {
                where: {
                    [Op.and]: [
                        { Id_Usuario: id },
                      ]
                  }
            }
        }
        else if (type=='produto'){
            condicao = {
                where: {
                    [Op.and]: [
                        { Id_Produto: id },
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
        try {

            const result = await Modelo.findByPk( id,{
               
                // include:[ 
                // {association:"images", through:{attributes:[]}},],
                
            })
           
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
        const { Status_estabelecimento, Status_usuario } = dados;
        try {
            const result = await Modelo.update(
                { Status_estabelecimento, Status_usuario } ,
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