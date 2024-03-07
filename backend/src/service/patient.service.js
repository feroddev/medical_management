const { Patient, Address } = require('../database/models');

const getAll = async () => {
  const patients = await Patient.findAll({
    attributes: { exclude: ['password', 'addressId'] },
    include: [{ model: Address, as: 'address', attributes: { exclude: ['id'] } }],
  });
  return { status: 'SUCCESSFUL', data: patients };
};

const getById = async (id) => {
  const patient = await Patient.findByPk(id, {
    attributes: { exclude: ['password', 'addressId'] },
    include: [{ model: Address, as: 'address', attributes: { exclude: ['id'] } }],
  });

  if (!patient) return { status: 'NOT_FOUND', data: { message: 'Patient not found' } };

  return { status: 'SUCCESSFUL', data: patient };
};

module.exports = {
  getAll,
  getById,
};