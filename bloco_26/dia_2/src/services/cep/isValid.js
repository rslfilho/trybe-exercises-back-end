module.exports = (cep) => {
  const regex = /\d{5}-?\d{3}/;

  return cep.match(regex);
};
