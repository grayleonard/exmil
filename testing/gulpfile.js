var gulp = require('gulp');
var mustache = require('gulp-mustache');

gulp.task('default', function() {
	gulp.src('./templates/index.mustache')
		.pipe(mustache({}, {extension: '.html'}, {}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
	gulp.src('src/**/*')
		.pipe(gulp.dest('./dist/'));
});
