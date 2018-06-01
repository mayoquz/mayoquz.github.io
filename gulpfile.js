var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify');

gulp.task("sass", function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
				'node_modules/jquery/dist/jquery.min.js',
				'node_modules/owl.carousel/dist/owl.carousel.min.js',
				'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
			])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task("browser-sync", function() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notify: false
	});
});

gulp.task("watch", ["browser-sync", "sass", "scripts"], function() {
	gulp.watch("app/sass/**/*.sass", ["sass"]);
	gulp.watch("app/*.html", browserSync.reload);
	gulp.watch("app/**/*.js", browserSync.reload);
});