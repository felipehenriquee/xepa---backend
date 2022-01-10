const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class compra extends Model{
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
              Id_Estabelecimento: {
                type: DataTypes.UUID,
                allowNull: false,
              },
             
              Status_estabelecimento: {
                type: DataTypes.STRING,
                
              },
              Status_usuario: {
                type: DataTypes.STRING,
               
                
              },
              
            
             
            
        },{
            sequelize,
            
          })
          
    }
    static associate(models){
      
      console.log(models)
      this.belongsToMany(models.produto, {foreignKey:"Id_Compra", through:'compra-produto', as:"produtos"});
      this.belongsTo(models.estabelecimento, {foreignKey:"Id_Estabelecimento", as:"estabelecimentos"});
      this.belongsTo(models.usuario, {foreignKey:"Id_Usuario", as:"usuarios"});

        
        
    }
    
    
}

module.exports = compra;