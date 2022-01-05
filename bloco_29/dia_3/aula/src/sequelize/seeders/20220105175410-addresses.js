module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Belo Horizonte',
          street: 'Rua Florida',
          number: 1080,
          employee_id: 1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          city: 'São Paulo',
          street: 'Avenida Paulista',
          number: 1980,
          employee_id: 2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          city: 'Fortaleza',
          street: 'Rua das Enseadas',
          number: 95,
          employee_id: 3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Andaluzita',
          number: 131,
          employee_id: 4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          city: 'Belo Horizonte',
          street: 'Rua Vicente Alvarenga',
          number: 80,
          employee_id: 1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          city: 'Curitiba',
          street: 'Rua Fria',
          number: 101,
          employee_id: 5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};
