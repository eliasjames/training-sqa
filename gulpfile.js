var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', () =>
    gulp.src(['src/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
);
