'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estabelecimentos', { 
      Id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true

      },
      Id_Usuario: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        references: { model: "usuarios", key:"Id"},
        onDelete: 'CASCADE',

      },
      Imagem: {
        type: Sequelize.STRING,
        
      },
      Nome: {
        type: Sequelize.STRING,
        
      },
      Tipo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Logradouro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Bairro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Localidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Uf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cep:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Complemento:{
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
    
    await queryInterface.dropTable('estabelecimentos');
     
  }
};
