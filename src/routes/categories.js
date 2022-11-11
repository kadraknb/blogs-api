const express = require('express');
const { controllersCategories } = require('../controllers');

const router = express.Router();

router.post('/', controllersCategories.postCategories);

module.exports = router;