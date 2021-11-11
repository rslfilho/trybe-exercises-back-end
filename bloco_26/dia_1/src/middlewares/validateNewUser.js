const validateName = (firstName, lastName) => (!firstName || !lastName) ? false : true;

const validatePassword = (password) => (
  password.length < 6
  || typeof password !== 'string'
  ? false
  : true
);

const validateEmail = (email) => {
  const regex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  return email.match(regex);
};

module.exports = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!validateName(firstName, lastName)) {
    return res.status(400).json({
      "error": true,
      "message": "Os campos 'firstName' e 'lastName' são obrigatórios"
    })
  }

  if (!validatePassword(password)) {
    return res.status(400).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }

  if (!validateEmail(email)) {
    return res.status(400).json({
      "error": true,
      "message": "O campo email deve ser um email válido"
    })
  }

  return next();
};
