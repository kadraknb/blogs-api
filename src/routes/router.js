const express = require('express');
const login = require('./login');

const routers = express.Router();

routers.use('/login', login);

module.exports = routers;