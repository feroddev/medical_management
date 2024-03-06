'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('patients', [{
      name: 'Felipe Rodrigues',
      phone: '31999999999',
      email: 'felipe@gmail.com',
      password: '123456Fr!',
      birth: '1995-02-12',
      gender: 'Male',
      address_id: 1,
    },{
      name: 'Bruno Santos',
      phone: '48999999999',
      email: 'bruno@gmail.com',
      password: '123456Bs!',
      birth: '1995-02-12',
      gender: 'Male',
      address_id: 2,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('patients', null, {});
  }
};
