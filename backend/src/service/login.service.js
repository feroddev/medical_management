const { admin } = require('../database/models/');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

const loginAdmin = async (email, password) => {
  const user = await admin.findOne({ where: { email } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Incorrect username or password' } };
  }
  const passwordMatch = await bcrypt.compare(password, user.dataValues.password);

  if (!passwordMatch) {
    return { status: 'BAD_REQUEST', data: { message: 'Incorrect username or password' } };
  }

  const token = generateToken({id: user.id, role: 'admin'});

  return { status: 'SUCCESSFUL', data: token };
};

module.exports = {
  loginAdmin,
};