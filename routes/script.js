var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', '</stylesheets/green.css>; rel=stylesheet');
  res.render('script', {
    description: 'Link header and HTML script tag'
  });
});

router.get('/resource', function(req, res, next) {
  res.append('Link', '</stylesheets/red.css>; rel=stylesheet');
  res.set('Content-Type', 'application/javascript; charset=UTF-8');
  res.send('console.log(\'Resource loaded\');');
});

module.exports = router;
