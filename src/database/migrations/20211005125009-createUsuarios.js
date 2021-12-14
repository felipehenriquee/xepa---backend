'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', { 
      Id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true

      },
      Nome: {
        type: Sequelize.STRING,
        
      },
      Email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      Senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Tipo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      CreatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      UpdatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      }

    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('usuarios');
     
  }
};
