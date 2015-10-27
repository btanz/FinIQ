/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);



var geldanlageCtrl = require('../../controller/geld_anlegen/mainController');

/** **************** I. HTML ROUTES **************** */

/** GET home page. */
router.get('/', function(req, res, next) {
  res.render('geld_anlegen/index');
});

/** GET sparrechner page. */
router.get('/sparrechner', function(req, res, next) {
  res.render('geld_anlegen/calc-sparrechner');
});

/** GET assetallokation page. */
router.get('/assetallokation', function(req, res, next) {
  res.render('geld_anlegen/calc-assetallokation');
});



module.exports = router;
