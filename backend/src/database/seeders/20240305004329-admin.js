'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admin', [{
      name: 'Felipe Rodrigues',
      email: 'felipe@medicalapp.com',
      password: '123456Fr!'
    }, {
      name: 'Bruno Santos',
      email: 'bruno@medicalapp.com',
      password: 'Bs@senh4'
    }], {timestamps: false});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
