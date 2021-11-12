const connection = require('./connectionM');

const serialize = ({ _id, firstName, middleName, lastName }) => {
  return {
    id: _id,
    firstName,
    middleName,
    lastName,
  }
};

const getAll = async () => {
  const db = await connection();
  const authors = await db.collection('authors').find().toArray();
  return authors.map(serialize);
};

// const getAllIds = async () => {
//   const [ ids ] = await connection.execute('SELECT id FROM authors');

//   return ids;
// };

module.exports = {
  getAll,
  // getAllIds,
};
