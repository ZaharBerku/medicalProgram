const gulp = require("gulp");

const clearDistFolder = require("./gulp-tasks/cleanDist").cleanDist;
const htmlTask = require("./gulp-tasks/html").html;
const imgTask = require("./gulp-tasks/img").img;
const cssTask = require("./gulp-tasks/styles").styles;
const jsTask = require("./gulp-tasks/script").js;

// const cssMinTask = require("./gulp-tasks/styleMin").cssMinify;


const browserSync = require('browser-sync').create();
var reload      = browserSync.reload;



function buildTask() {
    return gulp.series(clearDistFolder, gulp.parallel(htmlTask, cssTask, jsTask)); 
}


gulp.task("watch", () => {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    })
    gulp.dev(['src/'], buildTask(),).on("change", reload);
});



exports.build = buildTask();