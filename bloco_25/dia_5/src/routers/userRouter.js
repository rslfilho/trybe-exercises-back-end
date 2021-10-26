const express = require('express');

const { validateRegister, validadeLogin } = require('../middlewares');

const { user } = require('../controllers');

const router = express.Router();

router.post('/register', validateRegister, user.register);
router.post('/login', validadeLogin, user.login);

module.exports = router;
