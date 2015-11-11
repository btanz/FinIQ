/**
 * Created by benjamintanz on 10.11.15.
 */

var gulp    = require('gulp');
var merge = require('merge-stream');
var del = require('del');

var jshint      = require('gulp-jshint');
var util        = require('gulp-util');
var gulpprint   = require('gulp-print');
var gulpinject  = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var gulpTaskListing = require('gulp-task-listing');
var gulpImagemin = require('gulp-imagemin');
var gulpUseref = require('gulp-useref');
var gulpJade = require('gulp-jade');
var gulpConcat = require('gulp-concat');

var config = require('./config/gulp.config')();




/** list all defined tasks */
gulp.task('help', gulpTaskListing);
gulp.task('default', ['help']);


/** lint client side js */
gulp.task('lint', function(){
  log('*** Analyzing app/components source with JSHint ***');
  return gulp
      .src(['./client/app/components/**/*.js'])
      //.pipe(gulpprint())                                    // print files that are being touched
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish',{verbose: true}))
      .pipe(jshint.reporter('fail'));                       // fail and stop if it doesn't pass
});






/** inject bower AND app js into scripttag-template */
gulp.task('inject-js', function(){
  log('*** Inject bower AND app js into scripttag-template ***');
  var options = config.getWiredepDefaultOptions();
  var wiredep = require('wiredep').stream;

  return gulp
      .src(config.scriptSrc)
      .pipe(wiredep(options))
      .pipe(gulpinject(gulp.src(config.js),{ignorePath: 'client'}
      ))
      .pipe(gulp.dest(config.scriptDist));

});


/** inject bower AND app css into styletags-template */
gulp.task('inject-css', function(){
  log('*** Inject bower AND app css into styletags-template ***');
  var options = config.getWiredepDefaultOptions();
  var wiredep = require('wiredep').stream;

  return gulp
      .src(config.cssSrc)
      .pipe(wiredep(options))
      .pipe(gulpinject(gulp.src(config.css),{ignorePath: 'client'}))
      .pipe(gulp.dest(config.cssDist));
});



gulp.task('fonts', ['clean-fonts'],function(){
  log('*** Copying fonts ***');

  return gulp
    .src(config.fonts)
    .pipe(gulp.dest(config.build + 'fonts'));
});


gulp.task('images', ['clean-images'], function(){
  log('*** Copying and compressing the images ***');

  return gulp
      .src(config.images)
      .pipe(gulpImagemin({optimizationLevel: 4}))
      .pipe(gulp.dest(config.build + 'images'));
});


gulp.task('clean-fonts', function(done){
  return del(config.build + 'fonts/**/*');
});


gulp.task('clean-images', function(done){
  return del(config.build + 'images/**/*');
});

gulp.task('clean-js', function(done){
  return del(config.build + 'js/**/*');
});


gulp.task('clean', function(done){
  var delconfig = [].concat(config.build + 'fonts', config.build + 'images', config.build + 'js');
  log('Cleaning: ');
  log(delconfig);
  del(delconfig, done);
});

gulp.task('inject', ['inject-js', 'inject-css'],function(){
  log('*** inject JS and CSS into script- and styletags-templates ***');
});


// optimize to prepare for prodution
gulp.task('optimize', ['inject', 'clean-js'], function(){
  log('*** Optimizing CSS and JS ***');


  var appJS = gulp
      .src(config.appJS)
      .pipe(gulpConcat('app.js'))
      .pipe(gulp.dest(config.build + 'js/'));

  var assetsJS = gulp
      .src(config.assetsJS)
      .pipe(gulpConcat('assets.js'))
      .pipe(gulp.dest(config.build + 'js/'));

  var packagesJS = gulp
      .src(config.packagesJS)
      .pipe(gulpConcat('packages.js'))
      .pipe(gulp.dest(config.build + 'js/'));

  return merge(appJS, assetsJS, packagesJS);


});










/** HELPER FUNCTIONS */

function log(msg){
  if(typeof(msg) === 'object'){
    for (var item in msg){
      if (msg.hasOwnProperty(item)){
        util.log(util.colors.blue(msg[item]));
      }
    }
  } else {
    util.log(util.colors.blue(msg));
  }
}