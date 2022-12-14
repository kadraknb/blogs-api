const express = require('express');
const { validateToken } = require('../middlewares/middlewareAuth');

const { controllersUser } = require('../controllers');

const router = express.Router();

router.post('/', controllersUser.createUser);
router.use(validateToken);
router.get('/:id', controllersUser.getById);
router.get('/', controllersUser.getUser);
router.delete('/me', controllersUser.deleteUser);

module.exports = router;