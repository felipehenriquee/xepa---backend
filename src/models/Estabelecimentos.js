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
                
              },
              Logradouro:{
                type: DataTypes.STRING,
               
              },
              Bairro:{
                type: DataTypes.STRING,
                
              },
              Localidade:{
                type: DataTypes.STRING,
                
              },
              Uf:{
                type: DataTypes.STRING,
                
              },
              Cep:{
                type: DataTypes.STRING,
                
              },
              Complemento:{
                type: DataTypes.STRING,
                
              },
              Numero:{
                type: DataTypes.STRING,
                
              },
              Telefone:{
                type: DataTypes.STRING,
               
              },
              TotalProdutos:{
                type: DataTypes.INTEGER
                
              },
              MediaDescontos:{
                type: DataTypes.DOUBLE
              },
              ValorDescontos:{
                type: DataTypes.DOUBLE
              },
              HoraAbre:{
                type: DataTypes.TIME
              },
              HoraFecha:{
                type: DataTypes.TIME
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