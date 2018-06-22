const express = require('express');
const path = require('path');
const router = express.Router();


const userApiRoutes = require('./user');

router.use('/user', userApiRoutes);

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.status(200).json({ error: false, message: 'success call!' });
});

module.exports = router;
