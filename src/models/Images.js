const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

class images extends Model{
    static init(sequelize){
        super.init({
            Id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
        
            },
            Path: {
                type: DataTypes.STRING,
                allowNull: false,
                
            },
            Tipo: {
                type: DataTypes.STRING,
                allowNull: false,        
            },
            
            
        },{
            sequelize,
            
          })
          
    }
    static associate(models){
        this.belongsToMany(models.estandes, {foreignKey:"Id_image", through:'estandes_images',})
    }
}

module.exports = images;