'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('compras', { 
      Id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true

      },
      Id_Estabelecimento: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "estabelecimentos", key:"Id"},
        onDelete: 'CASCADE',

      },
      Id_Usuario: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "usuarios", key:"Id"},
        onDelete: 'CASCADE',

      },
      Id_Produto: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "produtos", key:"Id"},
        onDelete: 'CASCADE',

      },
      Status_usuario: {
        type: Sequelize.STRING,
        
      },
      Status_Estabelecimento: {
        type: Sequelize.STRING,
        
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
    
    await queryInterface.dropTable('compras');
     
  }
};
