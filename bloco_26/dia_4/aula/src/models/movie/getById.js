const connection = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  if(!ObjectId.isValid(id)) return false;
  const _id = new ObjectId(id);
  const db = await connection();
  const collection = await db.collection('movies');
  const response = await collection.findOne(_id);

  return response;
};
