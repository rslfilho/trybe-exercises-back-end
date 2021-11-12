const service = require('../../services/cep');

module.exports = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  let adress = { cep, logradouro, bairro, localidade, uf };
  const isValid = service.isAdressValid(adress);
  if ('status' in isValid) return next(isValid);
  adress.cep = service.suitCep(adress.cep);
  const created = await service.create(adress);
  if ('error' in created) {
    const { status, code, message } = created.error;
    return next({
      status,
      code,
      message,
    });
  }
  res.status(201).json(created);
};
