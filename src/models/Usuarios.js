const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const { Model, DataTypes } = require('sequelize');

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  console.log("hash")
  if (!user.changed('Senha')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.Senha, salt, null))
    .then(hash => {
      user.setDataValue('Senha', hash)
    })
}
class usuario extends Model{
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
              
              
            Email:{
              type: DataTypes.STRING,
              
            },
            Senha:{
              type: DataTypes.STRING,
              
            },
            Tipo:{
              type: DataTypes.STRING,
              
            },
              
            
        },{
          sequelize,
          hooks: {
            
            
            beforeSave: hashPassword,
            
          },
          
        });
        usuario.prototype.comparePassword = function (Senha) {
          console.log(Senha)
          return bcrypt.compareAsync(Senha, this.Senha)
        }
           
    }
    
    static associate(models){
       
        
      
      this.hasOne(models.compra, {foreignKey:"Id_Usuario", through:"Compras", as:"usuarios"});
      
      
  }
    
}

module.exports = usuario;