'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', { 
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
      Nome: {
        type: Sequelize.STRING,
        
      },
      Descricao: {
        type: Sequelize.STRING,
        
      },
      Imagem: {
        type: Sequelize.STRING,
        
      },
      Tipo: {
        type: Sequelize.STRING,
        
      },
      Data: {
        type: Sequelize.DATE,
        
      },
      Peso: {
        type: Sequelize.DOUBLE,
        
      },
      Preco_Original: {
        type: Sequelize.DOUBLE,
        
      },
      Preco_Promocional: {
        type: Sequelize.DOUBLE,
        
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
    
    await queryInterface.dropTable('produtos');
     
  }
};
