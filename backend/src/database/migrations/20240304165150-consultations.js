'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('consultations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'patients',
          key: 'id',
        },
      },
      datetime: {
        type: Sequelize.DATE,
        primaryKey: true,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Scheduled', 'Done', 'Canceled'],
        allowNull: false,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'doctors',
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('consultations');
  }
};
