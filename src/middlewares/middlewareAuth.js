const jwtUtil = require('../utils/utilJwt');

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    const e = new Error('Token not found');
    e.status = 401;
    throw e;
  }
  const user = jwtUtil.validateToken(authorization);
  req.user = user;

  next();
};

module.exports = { validateToken };