var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('css', function () {
  gulp.src('source/css/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('html', function() {
    return gulp.src('source/html/**/*.html')
        .pipe(gulp.dest('build'))
        .pipe(connect.reload())
        /*.pipe(livereload(server))
        .pipe(notify({ message: 'HTML task complete' }));*/
});

gulp.task('watch', function () {
   gulp.watch('source/css/*.css', ['css']);
   gulp.watch('source/html/**/*.html', ['html']);
});

gulp.task('default', ['css']);

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true,
    open: true
  });
});

gulp.task('start', ['connect', 'watch']);
