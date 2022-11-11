const express = require('express');
const { validateToken } = require('../middlewares/middlewareAuth');

const login = require('./login');
const user = require('./user');
const categories = require('./categories');

const routers = express.Router();

routers.use('/login', login);
routers.use('/user', user);
routers.use(validateToken);
routers.use('/categories', categories);

module.exports = routers;