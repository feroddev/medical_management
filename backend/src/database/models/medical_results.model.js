module.exports = (sequelize, DataTypes) => {
  const MedicalResults = sequelize.define('MedicalResults', {
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
        model: 'Consultation',
        key: 'id',
      },
    },
  });

  MedicalResults.associate = (models) => {
    MedicalResults.belongsTo(models.Consultation, {
      foreignKey: 'consultationId',
    });
  };

  return MedicalResults;
};
