const Modelo = require('../models/CompraProduto');

const { Op } = require("sequelize");

module.exports = {
    
    // async create(dados){
    //    const { Id_Produto, Id_Usuario,Id_Estabelecimento,Status_estabelecimento,Status_usuario, Quantidade } = dados;
    //     console.log(Quantidade)
    //     try {
    //         const result = await Modelo.create( {Id_Usuario,Id_Estabelecimento,Status_estabelecimento,Status_usuario} );
    //         // result.setProdutos(Id_Produto)
    //         const teste = await result.setProdutos(Id_Produto);
            
    //         return (result);
    //     } catch (error) {
            
    //         console.log(error)
    //         return error
    //     }

        
    // },
    
    
    // // async getAll(pageSize = 1000, order = "ASC", filter = "Id", page = 0, type="estabelecimento"){
        
    // //     const _pagina = parseInt(page)
    // //     const _tamanho = parseInt(pageSize)
    // //     const condicao = {
    // //         where: {
                
    // //           }
    // //     }
    // //     console.log(condicao)
    // //     if (type!='todos'){
    // //         condicao = {
    // //             where: {
    // //                   Tipo: type,
    // //               }
    // //         }
    // //     }

    // //     try {
    // //         const result = await Modelo.findAll({
                
                
    // //             order: [
    // //                 [filter, order],
    // //             ],
    // //             limit: _tamanho,
    // //             offset: _pagina*_tamanho,
    // //             // include:[{association:"images", through:{attributes:[]}}],
    // //             condicao
    // //         });
            
    // //         return ({status:200, result:{rows:result}});
    // //     } catch (error) {
    // //         console.log(error)
    // //         return ({status:400, error});
    // //     }
    // // },
    // async getAll(pageSize = 1000, order = "DESC", filter = "CreatedAt", page = 0, type="estabelecimento", id){
        
    //     const _pagina = parseInt(page)
    //     const _tamanho = parseInt(pageSize)
    //     const condicao = {
    //         where: {
    //             Id_Estabelecimento: id
    //           }
    //     }
    //     if (type=='usuario'){
    //         condicao = {
    //             where: {
    //                 [Op.and]: [
    //                     { Id_Usuario: id },
    //                   ]
    //               }
    //         }
    //     }
    //     else if (type=='produto'){
    //         condicao = {
    //             where: {
    //                 [Op.and]: [
    //                     { Id_Produto: id },
    //                   ]
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
                
    //             condicao,
    //             include:[ 
    //                 {association:"usuarios"},
    //                 {association:"estabelecimentos"}, 
    //                 {association:"produtos", through:{attributes:[]}}],

    //         });

            
            
    //         return ({status:200, result:{rows:result}});
    //     } catch (error) {
    //         console.log(error)
    //         return ({status:400, error});
    //     }
    // },
    // async getOne(id){
    //     try {

    //         const result = await Modelo.findByPk( id,{
               
    //             include:[ 
    //             {association:"produtos", through:{attributes:[]}},],
                
    //         })
    //         const estabelecimento = await Estabelecimento.getOne(result.Id_Estabelecimento)
           
    //         return ({status:200, result, estabelecimento: estabelecimento.result});
    //     } catch (error) {
    //         console.log(error)
    //         return ({status:400, error});
    //     }
    // }
    // ,
    // async delete(id){
    //     try {
    //         const result = await Modelo.destroy({
    //             where: {
    //                 Id: id
    //             }
    //         });
    //         return ({status:200, mensagem:"apagado com sucesso"});
    //     } catch (error) {
    //         return error
    //     }
    // },
    async edit(idCompra, idProduto, Quantidade){
        console.log(idCompra, idProduto, Quantidade)
        
        try {
            const result = await Modelo.update(
                { Quantidade } ,
                {
                    where:{
                        [Op.and]: [
                            { Id_Compra: idCompra },                   
                            { produtoId: idProduto },                   
                        ]
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