const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
const validate = require('./validations');

const validatePost = async ({ body }) => {
  const filter = Object.values(body).filter((param) => !!param);

  if (filter.length !== 3) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }

  const categorias = await Category.findAll({
    attributes: ['id'],
  });
  const categoriaValid = categorias.every((categoria) =>
    body.categoryIds.includes(categoria.dataValues.id));

  if (!categoriaValid) {
    const e = new Error('one or more "categoryIds" not found');
    e.status = 400;
    throw e;
  }
};

const createPost = async ({ title, content, id, data }) => {
  const ress = await BlogPost.create({
    title,
    content,
    userId: id,
    published: data,
    updated: data,
  });
  return ress;
};

const cratePostCategory = async (id, categoryIds) => {
  categoryIds.forEach(async (cateId) => {
    await PostCategory.create({
      postId: id,
      categoryId: cateId,
    });
  });
};

const getInBlogPost = () => {
  const result = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  return result;
};

const getById = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  if (!result) {
    const e = new Error('Post does not exist');
    e.status = 404;
    throw e;
  }

  return result;
};

const updateById = async (id, body, token) => {
  validate.blogPost.bodyUpdate(body);

  const {
    dataValues: { userId },
  } = await getById(id);
  await validate.blogPost.user(userId, token);

  const date = new Date();
  await BlogPost.update({ ...body, updated: date }, { where: { id } });
};

const deletePost = async (id, token) => {
  const {
    dataValues: { userId },
  } = await getById(id);
  await validate.blogPost.user(userId, token);

  await BlogPost.destroy({ where: { id } });
};

const getBySearch = async (search) => {
  const result = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
    where: {
      [Op.or]: [
        { title: { [Op.substring]: search } },
        { content: { [Op.substring]: search } },
      ],
    },
  });
  return result;
};

module.exports = {
  createPost,
  cratePostCategory,
  validatePost,
  getInBlogPost,
  getById,
  updateById,
  deletePost,
  getBySearch,
};
