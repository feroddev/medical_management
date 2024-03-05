'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('consultations', [{
      patient_id: 1,
      datetime: new Date('2024-03-05T10:00:00'),
      status: 'Scheduled',
      doctor_id: 1,
    }, {
      patient_id: 2,
      datetime: new Date('2024-03-05T11:00:00'),
      status: 'Scheduled',
      doctor_id: 1,
    }, {
      patient_id: 1,
      datetime: new Date('2024-03-03T10:00:00'),
      status: 'Canceled',
      doctor_id: 1,
    }, {
      patient_id: 2,
      datetime: new Date('2024-03-03T11:00:00'),
      status: 'Canceled',
      doctor_id: 1,
    }, {
      patient_id: 1,
      datetime: new Date('2024-03-07T10:00:00'),
      status: 'Scheduled',
      doctor_id: 2,
    }, {
      patient_id: 2,
      datetime: new Date('2024-03-05T11:00:00'),
      status: 'Done',
      doctor_id: 1,
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('consultations', null, {});
  }
};
