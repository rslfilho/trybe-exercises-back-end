const express = require('express');

const { validateRegister, validadeLogin } = require('../middlewares');

const {
  userRegisterController,
  userLoginController } = require('../controllers');

const router = express.Router();

router.post('/register', validateRegister, userRegisterController);
router.post('/login', validadeLogin, userLoginController);

module.exports = router;
