const { UserMysql } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const user = await UserMysql.getById(id);

  if (!user) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });

  return next();
};
