const Modelo = require('../models/Standes');

module.exports = {
    
    async create(dados, categorias){
       
        
        
        
        try {
            const result = await Modelo.create( dados );
        
            
            return (result);
        } catch (error) {
            
            
            return error
        }

        
    },
    
    
    async getAll(pageSize = 1000, order = "ASC", filter = "Nome", page = 0){
        const _pagina = parseInt(page)
        const _tamanho = parseInt(pageSize)
        
        try {
            const result = await Modelo.findAll({
                
                
                order: [
                    [filter, order],
                ],
                limit: _tamanho,
                offset: _pagina*_tamanho,
                include:[{association:"images", through:{attributes:[]}}],
                
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
               
                include:[ 
                {association:"images", through:{attributes:[]}},],
                
            })
            // const result = await Modelo.findAndCountAll({
                
                
            //     order: [
            //         [filter, order],
            //     ],
            //     limit: _tamanho,
            //     offset: _pagina*_tamanho,
            //     include:{association:"categorias", through:{attributes:[]}} ,
            // });
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
        const { Nome, Twitter, Youtube, Instagram, Catalogo, Wpp, Facebook, Site, Portfolio, Imagem} = dados;
        try {
            const result = await Modelo.update(
                { Nome, Modelo: dados.Modelo, Twitter, Youtube, Instagram, Catalogo, Wpp, Facebook, Site, Portfolio, Imagem} ,
                {
                    where:{
                        Id: id
                    }
                }
                );
                console.log("dados", dados, id)

            return ({status:200, result});
        } catch (error) {
            
            console.log(error)
            return error
        }

        
    },
    async contaAcessos(acesso, id){
        const _acesso= parseInt(acesso)
        try {
            const result = await Modelo.update(
                {  Acessos: _acesso } ,
                {
                    where:{
                        Id: id
                    }
                }
                );
            return ({status:200, result});
        } catch (error) {
            
            
            return error
        }
    }
    
    
}