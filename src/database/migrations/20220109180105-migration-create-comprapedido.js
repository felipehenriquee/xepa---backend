'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('compra-produto', { 
    
      Id_Compra: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "compras", key:"Id"},
        onDelete: 'CASCADE',

      },
      produtoId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "produtos", key:"Id"},
        onDelete: 'CASCADE',

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
    
    await queryInterface.dropTable('compra-produto');
     
  }
};
