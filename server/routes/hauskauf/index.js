/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hauskauf/index');
});

module.exports = router;
