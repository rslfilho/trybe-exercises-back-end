const express = require('express');
const rescue = require('express-rescue');

const { validateFields } = require('../middlewares/validateTeams');

const { teams } = require('../controllers');

const router = express.Router();

router.post('/', validateFields, rescue(teams.add));

router.get('/', rescue(teams.getAll));

module.exports = router;
