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
        type: Sequelize.TEXT,
        allowNull: false,
      },
      diagnosis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      treatment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      prescription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      consultation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'consultations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medical_results');
  }
};
