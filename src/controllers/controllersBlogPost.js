const { serviceBlogPost } = require('../services');
const { validateToken } = require('../utils/utilJwt');

const postInBlogPost = async (req, res) => {
  await serviceBlogPost.validatePost(req);
  const { id } = validateToken(req.headers.authorization);
  const data = new Date();
  const { title, content, categoryIds } = req.body;
  const resultPost = await serviceBlogPost.createPost({
    title,
    content,
    id,
    data,
  });
  const postId = resultPost.dataValues.id;
  await serviceBlogPost.cratePostCategory(postId, categoryIds);

  res.status(201).json(resultPost.dataValues);
};

module.exports = { postInBlogPost };
