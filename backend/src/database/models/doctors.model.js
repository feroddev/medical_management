module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    professional_registration: {
      type: DataTypes.STRING(13),
      unique: true,
      allowNull: false,
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'doctors',
  });

  Doctor.associate = (models) => {
    Doctor.hasMany(models.Consultation, {
      foreignKey: 'doctor_id',
      as: 'consultations',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Doctor;
};
