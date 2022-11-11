const { serviceCategories } = require('../services');

const postCategories = async (req, res) => {
  const { name } = serviceCategories.validateCategory(req);

  const result = await serviceCategories.createCategory({ name });
  res.status(201).json(result);
};

module.exports = { postCategories };
