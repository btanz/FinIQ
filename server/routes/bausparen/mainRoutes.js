/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);



var bausparCtrl = require('../../controller/bausparen/mainController');

/** **************** I. HTML ROUTES **************** */

/** GET home page. */
router.get('/', function(req, res, next) {
  res.render('bausparen/index');
});


/** **************** IA. CALCULATOR ROUTES **************** */



/** **************** IB. ARTICLE ROUTES **************** */





module.exports = router;
