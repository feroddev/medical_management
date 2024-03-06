'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medical_results', [{
      examination_result: 'Examination result 1',
      diagnosis: 'Influenza',
      treatment: 'Treatment 1',
      prescription: 'Prescription 1',
      consultation_id: 1, 
    }, {
      examination_result: 'Examination result 2',
      diagnosis: 'Allergy',
      treatment: 'Treatment 2',
      prescription: 'Prescription 2',
      consultation_id: 2,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medical_results', null, {});
  }
};
