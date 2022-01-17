const express = require('express');

const router = express.Router();

const BaseResponse = require('../baseResponse');

router.get('/', (req, res) => {
  const response = new BaseResponse(200, 'Hello World!');
  res.json(response.json);
});

module.exports = router;
