/**
 * Created by benjamintanz on 05.10.15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);



var hauskaufCtrl = require('../../controller/hauskauf/mainController');

/** **************** I. HTML ROUTES **************** */

/** GET home page. */
router.get('/', function(req, res, next) {
  res.render('hauskauf/index');
});

/** GET mieten oder kaufen. */
router.get('/mieten-oder-kaufen', function(req, res, next) {
  res.render('hauskauf/mietenoderkaufen');
});

/** GET wie hoch darf Hauspreis sein */
router.get('/wie-hoch-darf-der-hauspreis-sein', function(req, res, next) {
  res.render('hauskauf/kaufpreis');
});



/** GET deutschlands attraktivste arbeitsmärkte. */
router.get('/deutschlands-attraktivste-arbeitsmaerkte', function(req, res, next) {
  res.render('hauskauf/deutschlands-attraktivste-arbeitsmaerkte');
});

/** GET übersicht der grundstückspreise. */
router.get('/uebersicht-der-grundstueckspreise', function(req, res, next) {
  res.render('hauskauf/uebersicht-der-grundstueckspreise');
});

/** GET zehn schnäppchenregionen. */
router.get('/schnaeppchen-regionen-zum-bauen', function(req, res, next) {
  res.render('hauskauf/zehn-schnaeppchen-regionen');
});

/** GET wie laeuft der hauskauf ab. */
router.get('/wie-laeuft-der-hauskauf-ab', function(req, res, next) {
  res.render('hauskauf/art-ablauf-hauskauf');
});

/** GET checkliste hauskauf */
router.get('/checkliste-hauskauf', function(req, res, next) {
  res.render('hauskauf/art-checkliste-hauskauf');
});

router.get('/checkliste-hauskauf/download', function(req, res, next) {
  console.log(appDir);
  res.set('Content-Type', 'application/pdf');
  res.sendfile(appDir + '/other/hauskauf/data/finIQ_checklist_hauskauf.pdf','finIQ_Hauskauf_Checkliste');
  //res.render('hauskauf/art-checkliste-hauskauf');
});





/** **************** II. DATA ROUTES **************** */

router.get('/deutschlands-attraktivste-arbeitsmaerkte/map_data', hauskaufCtrl.besteArbeitsmarkte.serveJson);

router.get('/uebersicht-der-grundstueckspreise/map_data', hauskaufCtrl.grundstueckspreise.serveJson);





module.exports = router;
