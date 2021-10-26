const express = require('express');

const { validateFields } = require('../middlewares/validateTeams');

const {
  teamsAddController,
  teamsGetAllController,
} = require('../controllers');

const router = express.Router();

router.post('/', validateFields, teamsAddController);

router.get('/', teamsGetAllController);

module.exports = router;
