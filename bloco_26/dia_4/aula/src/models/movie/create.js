const connection = require('../connection');

module.exports = async (movie) => {
  // const collection = await (await connection()).collection('movie');
  // const { insertedId: id } = await collection.insertOne(movie);

  const { insertedId: id } = (await connection()).collection('movies').insertOne(movie);
  return { id };
};
