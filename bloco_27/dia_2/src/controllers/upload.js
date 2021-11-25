module.exports = (req, res) => {
  if (req.file) {
    return res.status(200).json({ file: req.file });
  }
  return res.status(400).json({ message: 'no file found' });
};