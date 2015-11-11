/**
 * Created by benjamintanz on 10.11.15.
 */

module.exports = function(){
  var client = './client/';
  var clientApp = client + 'app/';
  var server = './server/';
  var serverViews = server + 'views/';
  var clientDist = './clientDist/';


  var config = {
    build: './clientProd/',

    client: client,
    clientBase: '.' + client,

    clientDist: clientDist,

    fonts: [
      client + 'packages/font-awesome/fonts/**/*.*',
      client + 'assets/css/canvas/fonts/**/*.*'
    ],

    images: [
      client + 'assets/img/**/*.*',
      client + 'assets/css/canvas/images/**/*.*'
    ],

    scriptSrc: serverViews + '/_includes/scripttags.jade',
    scriptDist: serverViews + '/_includes/',

    cssSrc: serverViews + '/_includes/styletags.jade',
    cssDist: serverViews + '/_includes/',

    js: [
      './client/assets/js/**/*.js',
      './client/app/**/*.js'

    ],

    css: [
      './client/assets/css/canvas/*.css',
      './client/assets/css/*.css'
    ],

    appJS: './client/app/**/*.js',

    assetsJS: [
      './client/assets/js/canvas/plugins.js',
      './client/assets/js/canvas/functions.js',
      './client/assets/js/highcharts/map.src.js',
      './client/assets/js/highcharts/mapdata/countries/de/de-all.js',
      './client/assets/js/highcharts/mapdata/countries/de/de-all-all.js',
      './client/assets/js/highcharts/mapdata/custom/world.js'
    ],

    packagesJS: [
      './client/packages/jquery/dist/jquery.js',
      './client/packages/angular/angular.js',
      './client/packages/angularjs-slider/dist/rzslider.js',
      './client/packages/highcharts/highcharts.js',
      './client/packages/highcharts/highcharts-more.js',
      './client/packages/highcharts/modules/exporting.js',
      './client/packages/highcharts-ng/dist/highcharts-ng.js',
      './client/packages/underscore/underscore.js',
      './client/packages/angular-animate/angular-animate.js',
      './client/packages/angular-i18n/angular-locale_de-de.js'
    ],

    appCSS: './client/assets/css/app/**/*.css',

    assetsCSS: [
      './client/assets/css/canvas/style.css',
      './client/assets/css/canvas/dark.css',
      './client/assets/css/canvas/font-icons.css',
      './client/assets/css/canvas/animate.css',
      './client/assets/css/canvas/magnific-popup.css',
      './client/assets/css/canvas/responsive.css',
      './client/assets/css/canvas/colors.css'
    ],

    packagesCSS: [
      './client/packages/bootstrap/dist/css/bootstrap.css',
      './client/packages/font-awesome/css/font-awesome.css',
      './client/packages/angularjs-slider/dist/rzslider.css'
    ],



    /**
     * Bower and NPM locations
     */
    bower: {
      json: require('../bower.json'),
      directory: './client/packages/',
      ignorePath: '../../../client/'
    }

  };


  config.getWiredepDefaultOptions = function(){
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath,
      cwd: config.bower.cwd,
      fileTypes: {
        jade: {
          replace: {
            js: 'script(src=\'/{{filePath}}\')',
            css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
          }
        }
      }
    };

    return options;
  };


  return config;

};