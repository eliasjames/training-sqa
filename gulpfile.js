var gulp = require('gulp');
var jshint = require('gulp-jshint');
var karmaServer = require('karma').Server;
var watch = require('gulp-watch');
var SRC_FILES = 'src/**/*.js';
var SPEC_FILES = 'specs/**/*.js';

gulp.task( 'default', ['hint', 'test']);
gulp.task( 'hint', function() {
  gulp.src( [SRC_FILES, SPEC_FILES] )
    .pipe( jshint( '.jshintrc' ))
    .pipe( jshint.reporter( 'jshint-stylish' ))
});
gulp.task('watch-hint', function () {
  return watch([SRC_FILES, SPEC_FILES], { ignoreInitial: true })
    .pipe( jshint( '.jshintrc' ))
    .pipe( jshint.reporter( 'jshint-stylish' ))
});
gulp.task( 'test', function( done ) {
  var karmaConfig = {
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  };
  new karmaServer( karmaConfig, done ).start();
});
