const model = require('../../models/cep');

module.exports = async (cep) => {
  const adress = await model.getByCep(cep);

  if (!adress) return { error: { status: 404, code: "NotFound", message: "CEP não encontrado" } };

  return adress;
};
