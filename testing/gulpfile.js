var gulp = require('gulp');
var mustache = require('gulp-mustache');
var clean_css = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var clean = require('gulp-clean');

gulp.task('default', function() {
	gulp.src('templates/index.mustache')
		.pipe(mustache({}, {extension: '.html'}, {}))
		.pipe(gulp.dest('./dist/'));
	gulp.src('src/css/*.css')
		.pipe(clean_css())
		.pipe(gulp.dest('./dist/css/'));
	gulp.src('src/js/jquery*.js')
		.pipe(gulp.dest('./dist/js/'))
	gulp.src('src/js/control.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('clean', function() {
	gulp.src('dist/**/*')
		.pipe(clean());
});
