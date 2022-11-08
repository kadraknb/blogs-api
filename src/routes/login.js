const express = require('express');
const { controllersLogin } = require('../controllers');

const router = express.Router();

router.post('/', controllersLogin.login);

module.exports = router;