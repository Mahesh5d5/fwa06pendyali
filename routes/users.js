var express = require('express');
var router = express.Router();
var values = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  values =values+1;
  res.send('User accesses are: '+values);
});

module.exports = router;
