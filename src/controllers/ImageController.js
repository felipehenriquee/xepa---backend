
const ImageService = require('../services/ImageService');
const Validator = require('fastest-validator');



const v = new Validator()

module.exports = {
    // listar todos usuarios
    async upload(req, res){
        const file  = req.file;
        console.log("req.file", file)
        
        const image = await  ImageService.upload(file);
        return res.json(image);
    },
    
    // listar todos usuarios por categoria (adm ou não)
    // async indexByAdm(req, res){
    //     const {admin} = req.params;
    //     const users = await  UserService.getUserIsAdmin(admin);
    //     return res.json(users);
    // },
    // // lista um usuario
    // async indexById(req, res){
    //     const {id_user} = req.params;
    //     const users = await  UserService.getUser(id_user);
    //     return res.json(users);
    // },
    // // cadastrar usuario
    // async store(req, res){
        
    //     const schema = {
    //         name: {max: 60, min: 3, type:'string'},
    //         email: {max: 255, min: 5, type:'string'},
    //         password: {max: 16, min: 3, type:'string'},
            
    //     }
    //     const errors = v.validate(req.body, schema);
    //     if(Array.isArray(errors) && errors.length){
            
    //         return res.json({status: 401, errors});
    //     }

    //     const user = await UserService.newUser(req.body);
        
    //     return res.json(user)
 
    // },
    // async editUser(req, res){
        
    //     const schema = {
    //         name: {max: 60, min: 3, type:'string'},
    //         email: {max: 255, min: 5, type:'string'},
    //         password: {max: 16, min: 3, type:'string'},
            
    //     }
    //     const errors = v.validate(req.body, schema);
    //     if(Array.isArray(errors) && errors.length){
            
    //         return res.json({status: 401, errors});
    //     }
    //     const {id_user } = req.params;
    //     const user = await UserService.editUser(req.body, id);
        
    //     return res.json(user)
 
    // },
    // // apaga user
    // async delete(req, res){
    //     const { id_user } = req.params;
    //     const user = await UserService.delete(id_user);
    //     return res.json(user)

    // },

    
    
}