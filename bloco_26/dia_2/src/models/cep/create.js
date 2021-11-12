const connection = require('../connection');

module.exports = async (adress) => {
  const { cep, logradouro, bairro, localidade, uf } = adress;
  await connection().execute(
    `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`,
    [cep, logradouro, bairro, localidade, uf],
  );

  return adress;
};
