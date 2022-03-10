const gulp = require("gulp");
// const imagemin = require("gulp-imagemin");
// const newer = require("gulp-newer");

// exports.img = () => {
  return gulp.src("src/img/**/**")
//   .pipe(newer("build/img/**"))
//   .pipe(imagemin({
//     verbose: true
//   }))
  .pipe(gulp.dest('build/img'))
// };