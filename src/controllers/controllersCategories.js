const { serviceCategories } = require('../services');

const postCategories = async (req, res) => {
  const { name } = serviceCategories.validateCategory(req);

  const result = await serviceCategories.createCategory({ name });
  res.status(201).json(result);
};

const getCategories = async (req, res) => {
  const result = await serviceCategories.getAllCategory();
  
  res.status(200).json(result);
};

module.exports = { postCategories, getCategories };
