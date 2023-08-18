const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const sassGlob = require("gulp-sass-glob");
const browserSync = require("browser-sync");
require('dotenv').config();

const paths = {
    theme: process.env.THEME_PATH,
    style: process.env.STYLE_PATH,
    file: process.env.FILE_PATH,
    scss: process.env.SCSS_PATH,
    js: process.env.JS_PATH,
    dist: process.env.DIST_PATH
}

gulp.task('browser-init', function(){
    browserSync.init({
        proxy: process.env.LOCALHOST,
        open: true,
        watchOptions:{
            debounceDelay: 1000
        }
    })
})

gulp.task('browser-reload', function() {
    browserSync.reload();
});

gulp.task('css', function(){
    return gulp.src(paths.scss)
        .pipe(sassGlob())
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(gulp.dest(paths.style))
});

gulp.task('bundle', function(){
    return gulp.src(paths.js)
        .pipe(gulp.dest(paths.theme))
})

gulp.task('codesync', function(){
    return gulp.src(paths.file)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function(){
    // gulp.watch(paths.scss, gulp.series('css', 'codesync', 'browser-reload'));
    gulp.watch(paths.scss, gulp.task('css'));
    // gulp.watch(paths.js, gulp.series('bundle', 'codesync', 'browser-reload'));
    gulp.watch(paths.file).on('change', gulp.series('codesync', 'browser-reload'));
});

gulp.task('default', gulp.parallel('browser-init','watch'));
