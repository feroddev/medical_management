const httpMap = require('../utils/httpMap');
const { patientService } = require('../service');

const getPatients = async (_req, res) => {
  if (res.locals.user.role !== 'patient') {
    const { status, data } = await patientService.getAll();
    return res.status(httpMap(status)).json(data);
  }
  return res.status(403).json({ message: 'Access denied' });
};

const getPatientsById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await patientService.getById(id);
  return res.status(httpMap(status)).json(data);
};

module.exports = {
  getPatients,
  getPatientsById,
};