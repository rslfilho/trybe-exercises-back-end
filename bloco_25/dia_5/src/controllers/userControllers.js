const crypto = require('crypto');

const register = (_req, res, next) => {
  res.status(201).json({ "message": "user created" });
  next();
};

const login = (_req, res, next) => {
  const randomToken = crypto.randomBytes(12).toString('hex');
  res.status(200).json({ "token": randomToken });
  next();
};

module.exports = {
  register,
  login,
};
