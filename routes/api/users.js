const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route       POST api/users
// @description Register user
// @access      public
router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
