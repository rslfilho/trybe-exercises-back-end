const pingHandler = require('./pingController');
const helloHandler = require('./helloController');
const greetingHandler = require('./greetingsController');
const usersParamsHandler = require('./usersParamsController');
const getSimpsonsHandler = require('./getSimpsonsController');
const getSimpsonByIdHandler = require('./getSimpsonByIdController');
const postSimpsonHandler = require('./postSimpsonController');
const signUpHandler = require('./signUpController');

module.exports = {
  pingHandler,
  helloHandler,
  greetingHandler,
  usersParamsHandler,
  getSimpsonsHandler,
  getSimpsonByIdHandler,
  postSimpsonHandler,
  signUpHandler,
};
