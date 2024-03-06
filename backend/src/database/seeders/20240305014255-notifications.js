'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notifications', [{
      patient_id: 1,
      title: 'New Appointment',
      message: 'You have a new appointment with Dr. House at 10:00 AM on 2024-03-05',
      read: false,
    }, {
      patient_id: 2,
      title: 'New Appointment',
      message: 'You have a new appointment with Dr. House at 11:00 AM on 2024-03-05',
      read: false,
    }, {
      patient_id: 1,
      title: 'Canceled Appointment',
      message: 'Your appointment with Dr. House at 10:00 AM on 2024-03-03 was canceled',
      read: false,
    }, {
      patient_id: 2,
      title: 'Canceled Appointment',
      message: 'Your appointment with Dr. House at 11:00 AM on 2024-03-03 was canceled',
      read: false,
    }, {
      patient_id: 1,
      title: 'New Appointment',
      message: 'You have a new appointment with John Doe at 10:00 AM on 2024-03-07',
      read: true,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notifications', null, {});
  }
};
