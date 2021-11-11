const connection = require('./connection');

const serialize = (author) => {
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name,
  }
};

const getAll = async () => {
  const [ authors ] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize);
};

const getAllIds = async () => {
  const [ ids ] = await connection.execute('SELECT id FROM authors');

  return ids;
};

module.exports = {
  getAll,
  getAllIds,
};
