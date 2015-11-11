/**
 * Created by benjamintanz on 10.11.15.
 */

var gulp    = require('gulp');

var jshint      = require('gulp-jshint');
var util        = require('gulp-util');
var gulpprint   = require('gulp-print');
var gulpinject  = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');


var config = require('./config/gulp.config')();


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
  var options = config.getWiredepDefaultOptions();
  var wiredep = require('wiredep').stream;

  return gulp
      .src(config.scriptSrc)
      .pipe(wiredep(options))
      .pipe(gulpinject(gulp.src(config.js)
          .pipe(angularFilesort())
      ))
      .pipe(gulp.dest(config.scriptDist));

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