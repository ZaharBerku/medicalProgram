const gulp = require("gulp");
// const rename = require("gulp-rename");
// const concat = require('gulp-concat');
// const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;

exports.js = function () {
	return gulp.src("src/js/**/**/**/**")
		.pipe(uglify())
		// .pipe(sourcemaps.init())
        // .pipe(concat('script.min.js'))
		// .pipe(sourcemaps.write()) // Inline source maps.
		// .pipe(sourcemaps.write("./maps")) // In this case: lib/maps/bundle.min.js.map
		.pipe(gulp.dest("build/js"));
};