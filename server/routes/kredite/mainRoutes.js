/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);



var krediteCtrl = require('../../controller/kredite/mainController');

/** **************** I. HTML ROUTES **************** */
/** get the index page **/
router.get('/', function(req, res, next) {
  res.render('kredite/index');
});




/** **************** IA. CALCULATOR ROUTES **************** */
/** GET dispozinsrechner page. */
router.get('/dispozinsrechner', function(req, res, next) {
  res.render('kredite/calc-dispozinsrechner');
});




/** **************** IB. ARTICLE ROUTES **************** */
router.get('/wie-werde-ich-schuldenfrei', function(req, res, next) {
  res.render('kredite/art-wie-werde-ich-schuldenfrei');
});





/** **************** IC. BLOG ROUTES **************** */
/** GET vier Schritte zur Baufinanzierung. */
router.get('/gute-schulden-und-schlechte-schulden', function(req, res, next) {
  res.render('kredite/blog-gute-schulden-und-schlechte-schulden');
});



/** **************** II. DATA ROUTES **************** */



module.exports = router;
