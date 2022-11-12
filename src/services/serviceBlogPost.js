const { BlogPost, PostCategory, Category, User } = require('../models');

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

module.exports = {
  createPost,
  cratePostCategory,
  validatePost,
  getInBlogPost,
};
