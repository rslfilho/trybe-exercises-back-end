const express = require('express');

const {
  postsGetByIdController,
  postsGetAllController } = require('../controllers');

const router = express.Router();

router.get('/:id', postsGetByIdController);

router.get('/', postsGetAllController);

module.exports = router;
