'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'Books',
     [
      {
        title: 'Livro 1',
        author: 'Autor 1',
        page_quantity: 99999,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 2',
        author: 'Autor 1',
        page_quantity: 99999,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 3',
        author: 'Autor 2',
        page_quantity: 99999,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 4',
        author: 'Autor 2',
        page_quantity: 99999,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
     ],
     {},
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Books', { page_quantity: 99999 }, {});
  }
};
