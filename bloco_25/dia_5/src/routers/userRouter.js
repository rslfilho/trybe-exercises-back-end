const express = require('express');
const crypto = require('crypto');

const { validateRegister, validadeLogin } = require('../middlewares');

const router = express.Router();

router.post('/register', validateRegister, (_req, res) => {
  return res.status(201).json({ "message": "user created" });
});

router.post('/login', validadeLogin, (_req, res) => {
  const randomToken = crypto.randomBytes(12).toString('hex');
  return res.status(200).json({ "token": randomToken });
});

module.exports = router;
