const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: 'model_example',
});

module.exports = connection;
