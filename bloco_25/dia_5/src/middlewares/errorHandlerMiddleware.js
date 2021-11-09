module.exports = (err, _req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message, code: err.code });
    return next();
  }

  res.status(500).json({ message: err.message });
  next();
};
