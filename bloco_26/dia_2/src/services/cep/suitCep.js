module.exports = (cep) => {
  let suittedCep = cep;
  if (cep.includes('-')) {
    suittedCep = cep.split('-').join('');
  };

  return suittedCep;
};
