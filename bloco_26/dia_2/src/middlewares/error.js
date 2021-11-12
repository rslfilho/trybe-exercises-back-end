module.exports = (err, _req, res, _next) => {
  console.error(err.message);

  res.status(err.status).json({ code: err.code, message: err.message });
};
