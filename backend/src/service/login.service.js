const bcrypt = require('bcryptjs');
const { admin, Doctor, Patient } = require('../database/models');
const generateToken = require('../utils/generateToken');

const MESSAGE_INCORRECT_USERNAME_OR_PASSWORD = 'Incorrect email or password';

const loginAdmin = async (email, password) => {
  const user = await admin.findOne({ where: { email } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: MESSAGE_INCORRECT_USERNAME_OR_PASSWORD } };
  }
  const passwordMatch = await bcrypt.compare(password, user.dataValues.password);

  if (!passwordMatch) {
    return { status: 'BAD_REQUEST', data: { message: MESSAGE_INCORRECT_USERNAME_OR_PASSWORD } };
  }

  const token = generateToken({ id: user.id, role: 'admin' });

  return { status: 'SUCCESSFUL', data: token };
};

const loginDoctor = async (email, password) => {
  const user = await Doctor.findOne({ where: { email } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: MESSAGE_INCORRECT_USERNAME_OR_PASSWORD } };
  }
  const passwordMatch = await bcrypt.compare(password, user.dataValues.password);

  if (!passwordMatch) {
    return { status: 'BAD_REQUEST', data: { message: MESSAGE_INCORRECT_USERNAME_OR_PASSWORD } };
  }

  const token = generateToken({ id: user.id, role: 'doctor' });

  return { status: 'SUCCESSFUL', data: token };
};

const loginPatient = async (email, password) => {
  const user = await Patient.findOne({ where: { email } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: MESSAGE_INCORRECT_USERNAME_OR_PASSWORD } };
  }
  const passwordMatch = await bcrypt.compare(password, user.dataValues.password);

  if (!passwordMatch) {
    return { status: 'BAD_REQUEST', data: { message: MESSAGE_INCORRECT_USERNAME_OR_PASSWORD } };
  }

  const token = generateToken({ id: user.id, role: 'patient' });

  return { status: 'SUCCESSFUL', data: token };
};

module.exports = {
  loginAdmin,
  loginDoctor,
  loginPatient,
};