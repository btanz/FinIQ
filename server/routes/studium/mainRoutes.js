/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);



//var hauskaufCtrl = require('../../controller/hauskauf/mainController');

/** **************** I. HTML ROUTES **************** */

/** GET home page. */
router.get('/', function(req, res, next) {
  res.render('hauskauf/index');
});


/** **************** IA. CALCULATOR ROUTES **************** */




/** **************** IB. ARTICLE ROUTES **************** */



/** **************** IC. BLOG ROUTES **************** */

/** GET deutschlands attraktivste arbeitsmärkte. */
router.get('/moeglichkeiten-zur-studienfinanzierung', function(req, res, next) {
  res.render('studium/blog-moeglichkeiten-der-studienfinanzierung');
});





/** **************** II. DATA ROUTES **************** */



module.exports = router;
