var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', '</stylesheets/green.css>; rel=stylesheet');
  res.render('http-only', {
    description: 'Link header with one relation'
  });
});

module.exports = router;
