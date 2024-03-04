'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('patients', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM,
    values: ['Male', 'Female', 'Other'],
    allowNull: false,
  },
  addressId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'address_id',
    references: {
      model: 'address',
      key: 'id',
    },
  },
});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  }
};
