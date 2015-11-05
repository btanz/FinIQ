/**
 * Created by benjamintanz on 05.11.15.
 */
var express = require('express');
var router = express.Router();

/* GET blog home page. */
router.get('/', function(req, res, next) {
  res.render('blog/index');
});

module.exports = router;