const userRegisterController = require('./userControllers/register');
const userLoginController = require('./userControllers/login');
const btcPriceController = require('./btcControllers/price');
const postsGetByIdController = require('./postsControllers/getById');
const postsGetAllController = require('./postsControllers/getAll');
const teamsAddController = require('./teamsControllers/addTeam');
const teamsGetAllController = require('./teamsControllers/getAllTeams');

module.exports = {
  userRegisterController,
  userLoginController,
  btcPriceController,
  postsGetByIdController,
  postsGetAllController,
  teamsAddController,
  teamsGetAllController,
};
