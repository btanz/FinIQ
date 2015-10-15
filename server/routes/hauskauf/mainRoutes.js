/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();

var hauskaufCtrl = require('../../controller/hauskauf/mainController');

/** **************** I. HTML ROUTES **************** */

/** GET home page. */
router.get('/', function(req, res, next) {
  res.render('hauskauf/index');
});

/** GET mieten oder kaufen. */
router.get('/mieten-oder-kaufen', function(req, res, next) {
  res.render('hauskauf/mieten-oder-kaufen');
});

/** GET deutschlands attraktivste arbeitsmärkte. */
router.get('/deutschlands-attraktivste-arbeitsmaerkte', function(req, res, next) {
  res.render('hauskauf/deutschlands-attraktivste-arbeitsmaerkte');
});

/** GET übersicht der grundstückspreise. */
router.get('/uebersicht-der-grundstueckspreise', function(req, res, next) {
  res.render('hauskauf/uebersicht-der-grundstueckspreise');
});




/** **************** II. DATA ROUTES **************** */

router.get('/deutschlands-beste-arbeitsmaerkte/map_data', hauskaufCtrl.besteArbeitsmarkte.serveJson);

router.get('/uebersicht-der-grundstueckspreise/map_data', hauskaufCtrl.grundstueckspreise.serveJson);





module.exports = router;
