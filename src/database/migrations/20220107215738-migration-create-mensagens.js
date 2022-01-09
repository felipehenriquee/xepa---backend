'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mensagens', { 
      Id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true

      },
      Id_Compra: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "compras", key:"Id"},
        onDelete: 'CASCADE',

      },
      Id_Produto: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "produtos", key:"Id"},
        onDelete: 'CASCADE',

      },
      Mensagem: {
        type: Sequelize.STRING,
        
      },
      Cancelar: {
        type: Sequelize.STRING,
        
      },
      Quem: {
        type: Sequelize.STRING,
        
      },
      Icone: {
        type: Sequelize.INTEGER,
        
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
    
    await queryInterface.dropTable('mensagens');
     
  }
};
