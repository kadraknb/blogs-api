const express = require('express');
const { controllersUser } = require('../controllers');

const router = express.Router();

router.post('/', controllersUser.createUser);

module.exports = router;