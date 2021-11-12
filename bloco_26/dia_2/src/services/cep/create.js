const model = require('../../models/cep');

module.exports = async (adress) => {
  const found = await model.getByCep(adress.cep);
  
  if (found) return { error: {
    status: 409,
    code: 'alreadyExists',
    message: 'CEP já existente',
  }};

  const created = await model.create(adress);

  const cepBeggin = created.cep.slice(0, 5);
  const cepEnd = created.cep.slice(5, 8);

  return {
    ...created,
    cep: `${cepBeggin}-${cepEnd}`,
  };
};
