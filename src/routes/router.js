const express = require('express');

const login = require('./login');
const user = require('./user');
const categories = require('./categories');
const blogPost = require('./blogPost');

const routers = express.Router();

routers.use('/login', login);
routers.use('/user', user);
routers.use('/categories', categories);
routers.use('/post', blogPost);

module.exports = routers;