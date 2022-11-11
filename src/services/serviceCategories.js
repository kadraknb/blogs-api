const Joi = require('joi');
const { Category } = require('../models');

const validateCategory = ({ body }) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { error, value } = schema.validate(body);
  if (error) {
    error.status = 400;
    throw error;
  }

  return value;
};

const createCategory = async (name) => {
  const ress = await Category.create(name);

  return ress;
};

const getAllCategory = async () => {
  const result = await Category.findAll();

  return result;
};

module.exports = {
  createCategory,
  validateCategory,
  getAllCategory,
};
