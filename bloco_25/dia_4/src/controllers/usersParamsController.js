module.exports = (req, res) => {
  const { name, age } = req.params;
  return res.json({ message: `Seu nome é ${name}, e você tem ${age} anos de idade` });
};
