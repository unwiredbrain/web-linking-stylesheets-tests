var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', [
    '</stylesheets/yellow.css>; rel=stylesheet',
    '</stylesheets/blue.css>; rel=stylesheet'
  ]);
  res.render('mixed', {
    description: 'Link header with multiple relations, overridden by multiple HTML link tags (one responds with 404 Not Found)'
  });
});

module.exports = router;
