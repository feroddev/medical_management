'use strict';

const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('doctors', [{
      name: 'John Doe',
      email: 'johndoe@medicalapp.com',
      password: bcrypt.hashSync('123456Jd!', SALT_ROUNDS),
      specialty: 'Cardiologist',
      professional_registration: 'CRM-123456/MG',
      image: 'https://img.freepik.com/fotos-premium/medico-homem-adulto-em-pe-no-escritorio-do-hospital_884296-298.jpg',
    }, {
      name: 'Jane Doe',
      email: 'janedoe@medicalapp.com',
      password: bcrypt.hashSync('123456Jd!', SALT_ROUNDS), 
      specialty: 'Dermatologist',
      professional_registration: 'CRM-123457/MG',
      image: 'https://evorastudio.com.br/wp-content/uploads/2021/03/fotos-para-medicos-5.jpg'
    }, {
      name: 'Dr. House',
      email: 'drhouse@medicalapp.com',
      password: bcrypt.hashSync('123456Dh!', SALT_ROUNDS), 
      specialty: 'Neurologist',
      professional_registration: 'CRM-123458/MG',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('doctors', null, {});
  }
};
