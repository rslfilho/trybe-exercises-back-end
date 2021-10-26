const errorHandler = require('./errorHandlerMiddleware');
const {
  validateRegister,
  validadeLogin,
  validadeToken } = require('./validateMiddleware');

module.exports = {
  errorHandler,
  validateRegister,
  validadeLogin,
  validadeToken,
};
