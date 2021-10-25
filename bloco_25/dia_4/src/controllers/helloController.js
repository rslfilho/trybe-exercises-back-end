module.exports = (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello, ${name}` });
};
