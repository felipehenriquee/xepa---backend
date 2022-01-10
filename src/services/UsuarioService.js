const Modelo = require('../models/Usuarios');
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
require('dotenv').config()


module.exports = {
    
    async create(dados){

        try {
            var result = await Modelo.create( dados );
            result.Senha = undefined;
            const token = jwt.sign({user: result.Id, email: result.Email}, process.env.JWT_SECRET)

            return ({result, token});
        } catch (error) {
            
            
            return error
        }
 
    },
    
    async getAll(pageSize = 1000, order = "ASC", filter = "Nome", page = 0, type="todos"){
        console.log("user")
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
                
                attributes:["Id",
                "Nome",
                "Email",
                "Tipo",
                "createdAt",
                "updatedAt"],
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
                attributes:["Id",
                "Nome",
                "Email",
                "Tipo",
                "createdAt",
                "updatedAt"],
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
        const { Nome, Email, Senha, Tipo } = dados;
        try {
            const result = await Modelo.update(
                { Nome, Email, Senha, Tipo} ,
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
    
    async login(Email, Senha){
        try {

            var result = await Modelo.findOne( {Email, Senha},
                {
                    where:{
                        [Op.and]: [
                            { Email: Email },
                            { Senha: Senha }
                        ]
                }
            }
                
            )
            
            if(!result){
                return ({ status: 401, result: "Erro Login" });
            }
            
            result.Senha = undefined;
            const token = jwt.sign({user: result.Id, email: result.Email}, process.env.JWT_SECRET)

            return ({ status:200, result, token });
        } catch (error) {
            
            return ({status:400, error});
        }
    }
    
}