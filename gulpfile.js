const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function compSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'));
}

function js() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

function html() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
}


exports.default = gulp.parallel(compSass, images, js, html)

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compSass));
    gulp.watch('./src/scripts/*.js', gulp.parallel(js));
    gulp.watch('./src/*.html', gulp.parallel(html));
}