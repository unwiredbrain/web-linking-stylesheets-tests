var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.append('Link', [
    '</stylesheets/blue.css>; rel=stylesheet',
    '</stylesheets/red.css>; rel=stylesheet'
  ]);
  res.render('duplicated', {
    description: 'Link header with multiple relations, overridden by multiple HTML link tags with duplicated entries'
  });
});

module.exports = router;
