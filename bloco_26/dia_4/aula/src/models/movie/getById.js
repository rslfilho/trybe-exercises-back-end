const connection = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  const _id = new ObjectId(id);

  const db = await connection();
  const collection = await db.collection('movies');
  const response = await collection.find(_id).toArray();
  
  if (response.length === 0) return null;

  return response;
};
