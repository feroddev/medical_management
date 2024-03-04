module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['Male', 'Female', 'Other'],
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'address_id',
      references: {
        model: 'Address',
        key: 'id',
      },
    },
  });

  Patient.associate = (models) => {
    Patient.hasMany(models.Consultation, {
      foreignKey: 'patient_id',
    });
    Patient.hasMany(models.Notification, {
      foreignKey: 'patientId',
    });
  };

  return Patient;
};
