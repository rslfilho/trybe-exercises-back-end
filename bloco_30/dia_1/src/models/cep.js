const axios = require('axios');
const connection = require('./connection');

const API_URL = 'https://viacep.com.br/ws/';

const validateCEP = (CEP) => {
  const regexNoDash = /^[0-9]{8}$/;
  const regexDash = /^[0-9]{5}-[0-9]{3}$/;

  if (typeof CEP !== 'string') return false;

  return regexDash.test(CEP) || regexNoDash.test(CEP);
};

const getByCEP = async (CEP) => {
  if (!validateCEP(CEP)) return { message: 'CEP inválido' };

  const [data] = await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [CEP]);

  if (data.length === 0) {
    const { data } = await axios.get(`${API_URL}${CEP}/json`);
    const cep = {
      ...data,
      cep: data.cep.split('-').join('')
    };
    await add(cep);
    return cep;
  }

  const [cep] = data;

  return cep;
};

const add = async ({ cep, logradouro, bairro, localidade, uf }) => {
  await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );
}

module.exports = {
  getByCEP,
};
