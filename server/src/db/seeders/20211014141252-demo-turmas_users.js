'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('turmas_users', [
      {
        turma_id: "0a8ac3c5-3a3a-475d-ae30-5bb860c886a4",
        user_id: '75986822-7fff-4bf6-bb2e-983c586b91ff',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        turma_id: "b4ba09fa-9d6c-4186-b611-36bb87e8849e",
        user_id: '75986822-7fff-4bf6-bb2e-983c586b91ff',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        turma_id: "0a8ac3c5-3a3a-475d-ae30-5bb860c886a4",
        user_id: '90fecfae-1be7-4d44-89d9-2ff951281c81',
        created_at: new Date(),
        updated_at: new Date()
      },  
      {
        turma_id: "21811798-96d2-4680-a8f4-8bb441aa185c",
        user_id: '90fecfae-1be7-4d44-89d9-2ff951281c81',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        turma_id: "21811798-96d2-4680-a8f4-8bb441aa185c",
        user_id: 'f4c8a3fe-d9c3-48ea-80ed-e17ca913a3ad',
        created_at: new Date(),
        updated_at: new Date()
      },    
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmas_users', null, {});
  }
};
