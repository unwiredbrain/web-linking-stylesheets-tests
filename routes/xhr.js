var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', '</stylesheets/green.css>; rel=stylesheet');
  res.render('xhr', {
    description: 'Link header and async XHR request'
  });
});

router.get('/resource', function(req, res, next) {
  res.append('Link', '</stylesheets/red.css>; rel=stylesheet');
  res.json();
});

module.exports = router;
