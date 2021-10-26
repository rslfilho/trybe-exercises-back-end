const express = require('express');

const { validateFields } = require('../middlewares/validateTeams');

const { teams } = require('../controllers');

const router = express.Router();

router.post('/', validateFields, teams.add);

router.get('/', teams.getAll);

module.exports = router;
