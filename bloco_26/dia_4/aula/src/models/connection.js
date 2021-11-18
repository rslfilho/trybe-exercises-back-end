const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = async () => {
  if (db) return db;
  
  db = (await MongoClient.connect(process.env.MONGODB_URL, OPTIONS)).db('exercise_26_4');

  return db;
};

module.exports = connection;
