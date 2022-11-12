const express = require('express');
const { controllersBlogPost } = require('../controllers');
const { validateToken } = require('../middlewares/middlewareAuth');

const router = express.Router();

router.use(validateToken);

router.get('/:id', controllersBlogPost.getById);
router.get('/', controllersBlogPost.getInBlogPost);
router.post('/', controllersBlogPost.postInBlogPost);

module.exports = router;