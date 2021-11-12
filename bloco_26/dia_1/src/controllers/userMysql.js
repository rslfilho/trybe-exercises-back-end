const { UserMysql } = require('../models');

const create = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await UserMysql.create(firstName, lastName, email, password);

  res.status(201).json({
    "id": user.id,
    "firstName": user.firstName,
    "lastName": user.lastName,
    "email": user.email,
  });
};

const getAll = async (_req, res) => {
  const users = await UserMysql.getAll();

  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await UserMysql.getById(id);

  if (!user) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });

  return res.status(200).json(user);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  const result = await UserMysql.updateById(id, user);

  if (!result) return res.status(500).json({ message: "Usuário não atualizado" });

  res.status(200).json({ message: "Usuário atualizado" });
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
