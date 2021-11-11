const connection = require('./connection');

const serialize = (book) => {
  return {
    id: book.id,
    title: book.title,
    authorId: book.author_id,
  };
};

const getAll = async () => {
  const [ books ] = await connection.execute('SELECT id, title, author_id from books');

  return books.map(serialize);
};

const getById = async (id) => {
  const [ books ] = await connection.execute(`SELECT id, title, author_id from books where id = ${id}`);

  if(books.length === 0) return null;

  return books.map(serialize);
};

const getByAuthorId = async (id) => {
  const [ books ] = await connection.execute(`SELECT id, title, author_id from books where author_id = ${id}`);

  if(books.length === 0) return null;

  return books.map(serialize);
};

const create = async (title, author_id) => await connection
  .execute(`INSERT INTO books (title, author_id) VALUES ('${title}', ${author_id})`);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
