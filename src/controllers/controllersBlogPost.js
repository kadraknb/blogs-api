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

const getInBlogPost = async (_req, res) => {
  const result = await serviceBlogPost.getInBlogPost();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await serviceBlogPost.getById(req.params.id);
  res.status(200).json(result);
};

module.exports = { postInBlogPost, getInBlogPost, getById };
