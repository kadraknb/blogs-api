const express = require('express');
const { validateToken } = require('../middlewares/middlewareAuth');

const { controllersUser } = require('../controllers');

const router = express.Router();

router.post('/', controllersUser.createUser);
router.use(validateToken);
router.get('/', controllersUser.getUser);

module.exports = router;