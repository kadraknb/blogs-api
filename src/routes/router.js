const express = require('express');
// const auth = require('../middlewares/middlewareAuth');
const login = require('./login');
const user = require('./user');

const routers = express.Router();

routers.use('/login', login);
routers.use('/user', user);

module.exports = routers;