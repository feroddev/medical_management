module.exports = (sequelize, DataTypes) => {
  const MedicalResults = sequelize.define('MedicalResults', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    examination_result: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    prescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    consultation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Consultation',
        key: 'id',
      },
    },
  });

  MedicalResults.associate = (models) => {
    MedicalResults.belongsTo(models.Consultation, {
      foreignKey: 'consultation_id',
    });
  };

  return MedicalResults;
};
