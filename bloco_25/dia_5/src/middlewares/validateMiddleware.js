const validateUsername = (username) => username.length <= 3 ? false : true;

const validadeEmail = (email) => {
  const regex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  return email.match(regex) ? true : false;
};

const validatePassword = (password) => {
  const length = password.toString().length;
  const typeofPassword = typeof password;

  if(length >= 4 && length <= 8 && typeofPassword === 'number') return true;
  return false;
};

const validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;

  const isValidUsername = validateUsername(username);
  const isValidEmail = validadeEmail(email);
  const isValidPassword = validatePassword(password);

  if(!(isValidUsername && isValidEmail && isValidPassword)) return res.status(400).json({ "message": "invalid data" });

  next();
};

const validadeLogin = (req, res, next) => {
  const { email, password } = req.body;

  const isValidEmail = validadeEmail(email);
  const isValidPassword = validatePassword(password);

  if(!(isValidEmail && isValidPassword)) return res.status(400).json({ "message": "email or password is incorrect" });

  next();
};

const validadeToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  const splittedToken = token.split('');
  const tokenLength = splittedToken.length;

  const hasNumber = splittedToken.some((char) => !(isNaN(char)));
  const hasNotNumber = splittedToken.some((char) => isNaN(char));
  
  if(!(hasNumber && hasNotNumber && tokenLength === 12)) return res.status(401).json({ "message": "invalid token" });

  next();
};

module.exports = {
  validateRegister,
  validadeLogin,
  validadeToken,
};
