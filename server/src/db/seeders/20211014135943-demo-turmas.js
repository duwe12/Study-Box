'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('turmas', [
      {
        id: "0a8ac3c5-3a3a-475d-ae30-5bb860c886a4",
        nome: 'React',
        descricao: "Timbó/Matutino",
        icone: "react",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: "b4ba09fa-9d6c-4186-b611-36bb87e8849e",
        nome: 'Prog. WEB',
        descricao: "Timbó/Vespertino",
        icone: "web",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: "21811798-96d2-4680-a8f4-8bb441aa185c",
        nome: 'Inglês',
        descricao: "Timbó/Matutino",
        icone: "ab-testing",
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmas', null, {});
  }
};
