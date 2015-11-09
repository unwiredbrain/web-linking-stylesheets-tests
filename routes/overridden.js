var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', '</stylesheets/red.css>; rel=stylesheet');
  res.render('overridden', {
    description: 'Link header with one relation, overridden by one HTML link tag'
  });
});

module.exports = router;
