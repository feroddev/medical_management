'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medical_records', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      examination_result: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      diagnosis: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      treatment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'consultations',
          key: 'id',
        },
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medical_records');
  }
};
