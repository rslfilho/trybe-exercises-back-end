const connectionMysql = require('./connectionMysql');

const create = async (firstName, lastName, email, password) => {
  const [rows] = await connectionMysql().execute(
`INSERT INTO users (first_name, last_name, email, password)
VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password]
  );

  return { id: rows.insertId, firstName, lastName, email };
};

const getAll = async () => {
  const [rows] = await connectionMysql().execute(
    `SELECT * FROM users`
  );

  return rows;
};

const getById = async (id) => {
  const [rows] = await connectionMysql().execute(
    `SELECT * FROM users WHERE id = ?`,
    [id],
  );

  if (rows.length === 0) return null;

  return rows[0];
};

const updateById = async (id, user) => {
  const { firstName, lastName, email, password } = user;

  await connectionMysql().execute(
`UPDATE users
SET
    first_name = ?,
    last_name = ?,
    email = ?,
    password = ?
WHERE id = ?`,
    [firstName, lastName, email, password, +id],
  );

  return true;
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
