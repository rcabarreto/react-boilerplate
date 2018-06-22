const express = require('express');
const path = require('path');
const router = express.Router();


/* GET home page. */
router.get('/login', function(req, res, next) {
  console.log('login route');
  res.sendFile( path.join(__dirname, '../views/login.html'));
});

router.get('/*', function(req, res, next) {
  console.log('other route');
  res.sendFile( path.join(__dirname, '../views/index.html'));
});

module.exports = router;
