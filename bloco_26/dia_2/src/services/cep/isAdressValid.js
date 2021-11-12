const Joi = require('joi');

const schema = Joi.object({
  cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
})

module.exports = (adress) => {
  const { error, value } = schema.validate(adress);

  if (error) return {
    status: 400,
    code: 'invalidData',
    message: error.details.message,
  };

  return adress;
};
