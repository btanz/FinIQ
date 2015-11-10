var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET impressum page. */
router.get('/impressum', function(req, res, next) {
  res.render('other/impressum');
});

/* GET datenschutz page. */
router.get('/datenschutz', function(req, res, next) {
  res.render('other/datenschutz');
});

/* GET über finiq page. */
router.get('/finiq', function(req, res, next) {
  res.render('other/uberfiniq');
});


module.exports = router;
