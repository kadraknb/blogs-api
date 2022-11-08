const express = require('express');
const login = require('./login');
const user = require('./user');

const routers = express.Router();

routers.use('/login', login);
routers.use('/user', user);

module.exports = routers;