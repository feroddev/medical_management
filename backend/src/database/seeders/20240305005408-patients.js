'use strict';

const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('patients', [{
      name: 'Felipe Rodrigues',
      phone: '31999999999',
      email: 'felipe@gmail.com',
      password: bcrypt.hashSync('123456Fr!', SALT_ROUNDS),
      birth: '1995-02-12',
      gender: 'Male',
      address_id: 1,
    },{
      name: 'Bruno Santos',
      phone: '48999999999',
      email: 'bruno@gmail.com',
      password: bcrypt.hashSync('123456Bs!', SALT_ROUNDS),
      birth: '1995-02-12',
      gender: 'Male',
      address_id: 2,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('patients', null, {});
  }
};
