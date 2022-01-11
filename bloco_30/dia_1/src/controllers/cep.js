const cepModel = require('../models/cep');

const getByCEP = async (req, res) => {
  const { CEP } = req.body;

  const response = await cepModel.getByCEP(CEP);

  if ('message' in response) return res.status(404).json({ message: response.message });

  const firstPart = response.cep.substr(0, 5);
  const secondPart = response.cep.substr(5);

  const cep = {
    ...response,
    cep: `${firstPart}-${secondPart}`,
  };

  return res.status(200).render('index', { cep });
};

module.exports = {
  getByCEP,
};
