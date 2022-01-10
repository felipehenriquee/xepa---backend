const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class compraproduto extends Model{
    static init(sequelize){
        super.init({
            
              Id_Compra: {
                type: DataTypes.UUID,
                allowNull: false,
              },
              Id_Produto: {
                type: DataTypes.UUID,
                allowNull: false,
              },
             
              Quantidade: {
                type: DataTypes.INTEGER,
                
              },
              
              
            
             
            
        },{
            sequelize,
            tableName: 'compra-produto',
            
          })
          
    }
    // static associate(models){
      
    //   console.log(models)
    //   this.belongsToMany(models.produto, {foreignKey:"Id_Compra", through:'compra-produto', as:"produtos"});
    //   this.belongsTo(models.estabelecimento, {foreignKey:"Id_Estabelecimento", as:"estabelecimentos"});
    //   this.belongsTo(models.usuario, {foreignKey:"Id_Usuario", as:"usuarios"});

        
        
    // }
    
    
}

module.exports = compraproduto;