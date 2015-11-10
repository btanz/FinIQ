/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);



var bausparCtrl = require('../../controller/baufinanzierung/mainController');

/** **************** I. HTML ROUTES **************** */

/** GET home page. */
router.get('/', function(req, res, next) {
  res.render('baufinanzierung/index');
});


/** **************** IA. CALCULATOR ROUTES **************** */
/** GET mieten oder kaufen. */
router.get('/bausparrechner', function(req, res, next) {
  res.render('baufinanzierung/calc-bausparrechner');
});


/** **************** IB. ARTICLE ROUTES **************** */
/** GET vier Schritte zur Baufinanzierung. */
router.get('/schritte-zur-baufinanzierung', function(req, res, next) {
  res.render('baufinanzierung/art-vier-schritte-zur-finanzierung');
});




module.exports = router;
