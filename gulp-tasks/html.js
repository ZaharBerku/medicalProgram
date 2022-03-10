const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
// const rename = require('gulp-rename');


function handleHtmlFiles() {
    return  gulp.src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'));
}
exports.html = handleHtmlFiles;

