const express = require('express');
const { controllersCategories } = require('../controllers');
const { validateToken } = require('../middlewares/middlewareAuth');

const router = express.Router();

router.use(validateToken);

router.post('/', controllersCategories.postCategories);
router.get('/', controllersCategories.getCategories);

module.exports = router;