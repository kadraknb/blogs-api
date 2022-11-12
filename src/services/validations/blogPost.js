const { validateToken } = require('../../utils/utilJwt');

const bodyUpdate = (body) => {
  const validateBody = Object.values(body).every((param) => !!param);
  if (!validateBody) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }
};

const user = async (userId, token) => {
  const { id } = validateToken(token);
  
  if (id !== userId) {
    const e = new Error('Unauthorized user');
    e.status = 401;
    throw e;
  }
};

module.exports = { bodyUpdate, user };
