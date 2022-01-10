const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class produto extends Model{
    static init(sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
        
              },
              Id_Estabelecimento: {
                type: DataTypes.UUID,
                allowNull: false,
              },
              Nome: {
                type: DataTypes.STRING,
                
              },
              Descricao: {
                type: DataTypes.STRING,
                
              },
              Imagem: {
                type: DataTypes.STRING,
                
              },
              Tipo: {
                type: DataTypes.STRING,
                
              },
              Data: {
                type: DataTypes.DATE,
                
              },
              Peso: {
                type: DataTypes.DOUBLE,
                
              },
              Preco_Original: {
                type: DataTypes.DOUBLE,
                
              },
              Preco_Promocional: {
                type: DataTypes.DOUBLE,
                
              }, 
              Desconto: {
                type: DataTypes.DOUBLE,
                
              }, 
              Estoque: {
                type: DataTypes.INTEGER,
                
              }, 
              StartTime: {
                type: DataTypes.DATE,
                
              }, 
              EndTime: {
                type: DataTypes.DATE,
                
              }, 
            
             
            
        },{
            sequelize,
            
          })
          
    }
    static associate(models){
       
        
        this.belongsToMany(models.compra, {foreignKey:"produtoId", through:'compra-produto', as:"produtos"})
        
        
    }
    
    
}

module.exports = produto;