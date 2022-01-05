module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees',
      [
        { first_name: 'Marcos', last_name: 'Zuck', age: 49, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP') },
        { first_name: 'Fred', last_name: 'Mercurio', age: 19, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP') },
        { first_name: 'Ayrton', last_name: 'Keno', age: 51, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP') },
        { first_name: 'Robin', last_name: 'Mathias', age: 63, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP') },
        { first_name: 'Antonio', last_name: 'Augusto', age: 18, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP') },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};
