var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('css', function () {
    gulp.src('source/css/dimtest1.css')
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build'))
});
