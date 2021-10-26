const errorHandler = require('./errorHandlerMiddleware');
const {
  validateRegister,
  validadeLogin,
  validadeToken } = require('./validateMiddleware');
const logger = require('./loggerMiddleware');
const timeTracker = require('./timeTrackerMiddleware');

module.exports = {
  errorHandler,
  validateRegister,
  validadeLogin,
  validadeToken,
  logger,
  timeTracker,
};
