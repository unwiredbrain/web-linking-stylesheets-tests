var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    description: 'Stylesheet inclusion via HTTP Link header test cases'
  });
});

module.exports = router;
