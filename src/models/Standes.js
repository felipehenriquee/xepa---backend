const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class estandes extends Model{
    static init(sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
        
              },
              Nome: {
                type: DataTypes.STRING,
                
              },
              Modelo: {
                type: DataTypes.STRING,
                
                
              },
              Twitter: {
                type: DataTypes.STRING,
               
              },
              Youtube: {
                type: DataTypes.STRING,
               
                
              },
              Instagram: {
                type: DataTypes.STRING,
                
              },
              Catalogo: {
                type: DataTypes.STRING,
                
                
              },
              Wpp: {
                type: DataTypes.STRING,
                
              },
              Facebook: {
                type: DataTypes.STRING,
                
                
              },
              Site: {
                type: DataTypes.STRING,
               
              },
              Portfolio: {
                type: DataTypes.STRING,
               
                
              },
              Imagem: {
                type: DataTypes.STRING,
               
                
              },
              Acessos: {
                type: DataTypes.INTEGER,
                
                
              },
             
            
        },{
            sequelize,
            
          })
          
    }
    static associate(models){
       
        
        this.belongsToMany(models.images, {foreignKey:"Id_estande", through:'estandes_images', as:"images"})
        
        
    }
    
    
}

module.exports = estandes;