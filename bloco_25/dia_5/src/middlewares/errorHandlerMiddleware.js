module.exports = (err, _req, res, next) => {
  if (err.code && err.status) {
    res.status(err.status).json({ message: err.message, code: err.code });
    next();
  }

  res.status(500).json({ message: err.message });
  next();
};
