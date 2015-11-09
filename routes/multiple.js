var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', [
    '</stylesheets/blue.css>; rel=stylesheet',
    '</stylesheets/red.css>; rel=stylesheet',
    '</stylesheets/green.css>; rel=stylesheet'
  ]);
  res.render('http-only', {
    description: 'Link header with multiple relations'
  });
});

module.exports = router;
