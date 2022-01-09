const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class mensagens extends Model{
    static init(sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
        
              },
              Id_Produto: {
                type: DataTypes.UUID,
                
              },
              Id_Compra: {
                type: DataTypes.UUID,
                allowNull: false,
                
              },
              
              Mensagem: {
                type: DataTypes.STRING,
                
              },
              Cancelar: {
                type: DataTypes.STRING,
               
                
              },
              Quem: {
                type: DataTypes.STRING,
               
                
              },
                          
        },{
            sequelize,
            
          })
          
    }
    static associate(models){
       
        
        // this.hasOne(models.usuarios, {foreignKey:"Id_usuario", through:'estandes_images', as:"images"})
        
        
    }
    
    
}

module.exports = mensagens;