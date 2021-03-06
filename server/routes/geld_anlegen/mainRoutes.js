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


/** **************** IA. CALCULATOR ROUTES **************** */
/** GET sparrechner page. */
router.get('/sparrechner', function(req, res, next) {
  res.render('geld_anlegen/calc-sparrechner');
});

/** GET assetallokation page. */
router.get('/assetallokation', function(req, res, next) {
  res.render('geld_anlegen/calc-assetallokation');
});



/** **************** IB. ARTICLE ROUTES **************** */

/** GET wie geld anlegen. */
router.get('/wie-lege-ich-geld-an', function(req, res, next) {
  res.render('geld_anlegen/art-wie-geld-anlegen');
});


/** GET wie funktioniert der Aktienmarkt */
router.get('/wie-funktionieren-aktien', function(req, res, next) {
  res.render('geld_anlegen/art-wie-funktionieren-aktien');
});

/** GET was sind ETFs */
router.get('/was-sind-etfs', function(req, res, next) {
  res.render('geld_anlegen/art-was-sind-etfs');
});




/** **************** IC. BLOG ROUTES **************** */

/** GET Geldanlage für Studenten */
router.get('/geldanlage-fuer-studenten', function(req, res, next) {
  res.render('geld_anlegen/blog-geldanlage-fuer-studenten');
});

/** GET Fehler bei der Geldanlage */
router.get('/fehler-bei-der-Geldanlage', function(req, res, next) {
  res.render('geld_anlegen/blog-fehler-bei-der-geldanlage');
});

/** GET Das Baby ist da */
router.get('/das-baby-ist-da', function(req, res, next) {
  res.render('geld_anlegen/blog-das-baby-ist-da');
});

/** GET Smart Beta: eine neue Sicht */
router.get('/smart-beta', function(req, res, next) {
  res.render('geld_anlegen/blog-smart-beta-explanation');
});

/** GET Sechs häufige Fragen zu ETFs */
router.get('/haeufige-fragen-zu-etfs', function(req, res, next) {
  res.render('geld_anlegen/blog-antworten-auf-fragen-zu-etfs');
});

/** GET Die besten Finanzbücher 2015 */
router.get('/die-besten-finanzbuecher-2015', function(req, res, next) {
  res.render('geld_anlegen/blog-beste-finanzbuecher-2015');
});








module.exports = router;
