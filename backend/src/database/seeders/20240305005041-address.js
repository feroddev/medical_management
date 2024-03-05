'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('address', [{
      cep: '12345678',
      street: 'Rua dos Bobos',
      number: 15,
      city: 'Belo Horizonte',
      state: 'MG',
      neighborhood: 'Vila do Chaves',
      complement: 'Casa 1'
    }, {
      cep: '87654321',
      street: 'Rua dos Bobos',
      number: 50,
      city: 'Florianopolis',
      state: 'SC',
      neighborhood: 'Vila do Chaves',
      complement: 'Casa 2'
    }], {timestamps: false});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('address', null, {});
  }
};
