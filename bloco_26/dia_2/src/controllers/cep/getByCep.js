const service = require('../../services/cep');

module.exports = async (req, res, next) => {
  const { cep } = req.params;

  if (!service.isValid(cep)) return next({
    "code": "invalidData",
    "message": "CEP inválido",
    "status": 400,
  });

  const adress = await service.getByCep(cep);

  if (adress.error) {
    const { code, status, message } = adress.error;
    return next({ code, status, message });
  };

  res.status(200).json(adress);
};
