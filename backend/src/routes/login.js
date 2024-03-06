const express = require('express');
const validateLogin = require('../middlewares/login');
const {loginController} = require('../controller');

const loginRoute = express.Router();

loginRoute.post('/admin', validateLogin, loginController.admin);


module.exports = loginRoute;