const mysql = require('mysql2/promise');

let connection = null;

module.exports = () => {
  return connection ? connection : connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'cep_lookup',
  });
};
