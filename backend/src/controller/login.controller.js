const httpMap = require('../utils/httpMap');
const { loginService } = require('../service');

const admin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.loginAdmin(email, password);
  return res.status(httpMap(status)).json(data);
};

module.exports = {
  admin,
};