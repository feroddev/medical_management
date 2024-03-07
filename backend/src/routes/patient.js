const express = require('express');
const { patientController } = require('../controller');

const patientRoute = express.Router();

patientRoute.get('/', patientController.getPatients);
patientRoute.get('/:id', patientController.getPatientsById);

module.exports = patientRoute;