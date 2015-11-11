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


gulp.task('prepare-fonts', ['clean-fonts'],function(){
  log('*** Copying fonts ***');

  var faFonts = gulp
    .src(config.fonts[0])
    .pipe(gulp.dest(config.build + 'fonts'));

  var canvasFonts = gulp
      .src(config.fonts[1])
      .pipe(gulp.dest(config.build + 'css/fonts'));

  return merge(faFonts, canvasFonts);

});


gulp.task('prepare-images', ['clean-images'], function(){
  log('*** Copying and compressing the images ***');

  var mainImages = gulp
      .src(config.images[0])
      .pipe(gulpImagemin({optimizationLevel: 4}))
      .pipe(gulp.dest(config.build + 'assets/img/'));

  var canvasImages = gulp
      .src(config.images[1])
      .pipe(gulp.dest(config.build + 'css/images/'));

  return merge(canvasImages);
});

gulp.task('prepare-html', ['clean-html'], function(){
  log('*** Preparing angular templates for production ***');

  return gulp
      .src('./client/**/*.html')
      .pipe(gulp.dest(config.build));
});


gulp.task('prepare-js', ['clean-js'], function(){
  log('*** Preparing JS for production ***');

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


gulp.task('prepare-css', ['clean-css'], function(){
  log('*** Preparing CSS for production ***');

  var appCSS = gulp
      .src(config.appCSS)
      .pipe(gulpConcat('app.css'))
      .pipe(gulp.dest(config.build + 'css/'));

  var assetsCSS = gulp
      .src(config.assetsCSS)
      .pipe(gulpConcat('assets.css'))
      .pipe(gulp.dest(config.build + 'css/'));

  var packagesCSS = gulp
      .src(config.packagesCSS)
      .pipe(gulpConcat('packages.css'))
      .pipe(gulp.dest(config.build + 'css/'));

  return merge(appCSS, assetsCSS, packagesCSS);
});




gulp.task('prepare', ['prepare-js','prepare-fonts','prepare-images', 'prepare-css', 'prepare-html'],function(){
  log('*** Preparing files for production ***');
});


gulp.task('clean-fonts', function(done){
  return del([config.build + 'css/fonts/**/*', config.build + 'fonts/**/*']);
});


gulp.task('clean-images', function(done){
  return del([config.build + 'assets/img/**/*', config.build + 'css/images/**/*']);
});

gulp.task('clean-js', function(done){
  return del(config.build + 'js/**/*');
});

gulp.task('clean-css', function(done){
  return del(config.build + 'css/**/*');
});

gulp.task('clean-html', function(done){
  return del(config.build + '/**/*.html');
});


gulp.task('clean', function(done){
  var delconfig = [].concat(config.build + '/*');
  log('Cleaning: ');
  log(delconfig);
  del(delconfig, done);
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