const authHandler = require('./authMiddleware');
const errorHandler = require('./errorMiddleware');

module.exports = {
  authHandler,
  errorHandler,
};
