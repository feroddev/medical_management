'use strict';

const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [{
      name: 'Felipe Rodrigues',
      email: 'felipe@medicalapp.com',
      password: bcrypt.hashSync('123456Fr!', SALT_ROUNDS)
    }, {
      name: 'Bruno Santos',
      email: 'bruno@medicalapp.com',
      password: bcrypt.hashSync('123456Bs!', SALT_ROUNDS)
    }], {timestamps: false});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
