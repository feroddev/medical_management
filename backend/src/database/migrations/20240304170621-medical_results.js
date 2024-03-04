'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medical_results', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      examination_result: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diagnosis: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      treatment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consultationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'consultations',
          key: 'id',
        },
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medical_results');
  }
};
