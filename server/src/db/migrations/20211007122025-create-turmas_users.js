'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turmas_users', {
      turma_id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.UUID,
        reference: {
          model: "turmas",
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
    await queryInterface.dropTable('turmas_users');
  }
};
// {{ _.baser }}/{{ _.route }}