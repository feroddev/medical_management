module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('Consultation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Patient',
        key: 'id',
      },
    },
    datetime: {
      type: DataTypes.DATE,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['Scheduled', 'Done', 'Canceled'],
      allowNull: false,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'Doctor',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
    tableName: 'consultations',
  });

  Consultation.associate = (models) => {
    Consultation.belongsTo(models.Doctor, {
      foreignKey: 'doctor_id',
    });
    Consultation.belongsTo(models.Patient, {
      foreignKey: 'patient_id',
    });
    Consultation.hasOne(models.MedicalResults, {
      foreignKey: 'consultation_id',
    });
  };
  
  return Consultation;
};
