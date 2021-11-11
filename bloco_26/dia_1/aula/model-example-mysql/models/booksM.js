const connection = require('./connectionM');
const { ObjectId } = require('mongodb');

const serialize = ({ _id, title, author_id}) => {
  return {
    id: _id,
    title,
    authorId: author_id,
  };
};

const getAll = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();
  return books.map(serialize);
};

const getById = async (id) => {
  const db = await connection();
  const book = await db.collection('books').findOne(ObjectId(id));

  if(!book) return null;

  return book;
};

const getByAuthorId = async (id) => {
  const db = await connection();
  const books = await db.collection('books').find({ author_id: +id }).toArray();

  if(books.length === 0) return null;

  return books.map(serialize);
};

const create = async (title, author_id) => {
  const db = await connection();
  const { insertedId } = db.collection('books').insertOne({ title, author_id });

  return { _id: insertedId, title, authorId: author_id};
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
