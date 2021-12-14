const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class estabelecimento extends Model{
    static init(sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
        
              },
              Id_Usuario: {
                type: DataTypes.UUID,
                allowNull: false,
              },
              Nome: {
                type: DataTypes.STRING,
                
              },
              Imagem: {
                type: DataTypes.STRING,
               
                
              },
              Tipo:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Logradouro:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Bairro:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Localidade:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Uf:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Cep:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Complemento:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Numero:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              Telefone:{
                type: DataTypes.STRING,
                allowNull: false,
              }
            
             
            
        },{
            sequelize,
            
          })
          
    }
    static associate(models){
       
        
        // this.hasOne(models.usuarios, {foreignKey:"Id_usuario", through:'estandes_images', as:"images"})
        
        
    }
    
    
}

module.exports = estabelecimento;