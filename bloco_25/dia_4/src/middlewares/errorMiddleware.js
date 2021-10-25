module.exports = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).json(`Algo deu errado! Mensagem: ${err.message}`);
};
