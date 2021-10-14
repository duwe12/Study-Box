'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notas', {
      prova_id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.UUID,
        reference: {
          model: "provas",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        reference: {
          model: "users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },  
      nota: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },   
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('notas');
  }
};