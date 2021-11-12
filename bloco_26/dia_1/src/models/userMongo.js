const connectionMongo = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const create = async (firstName, lastName, email, password) => {
  const db = await connectionMongo();
  const { insertedId } = await db.collection('users').insertOne({ firstName, lastName, email, password });
  return { id: insertedId, firstName, lastName, email };
};

const getAll = async () => {
  const db = await connectionMongo();
  const users = db.collection('users').find().toArray();

  if (!users) return null;

  return users;
};

const getById = async (id) => {
  const db = await connectionMongo();
  const user = await db.collection('users').findOne(ObjectId(id));

  if (!user) return null;

  return user;
};

const updateById = async (id, user) => {
  const { firstName, lastName, email, password } = user;
  const db = await connectionMongo();
  const { acknowledged } = await db.collection('users').updateOne(
    { _id: ObjectId(id) },
    { $set: { firstName, lastName, email, password } },
  );

  if (!acknowledged) return false;

  return true;
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
