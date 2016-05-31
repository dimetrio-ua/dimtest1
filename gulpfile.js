var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
/*var connect = require('gulp-connect');*/
var browserSync = require('browser-sync');

gulp.task('css', function () {
  gulp.src('source/css/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('build'))
    /*.pipe(connect.reload())*/
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function() {
    return gulp.src('source/html/**/*.html')
        .pipe(gulp.dest('build'))
        /*.pipe(connect.reload())*/
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', function () {
   gulp.watch('source/css/*.css', ['css']);
   gulp.watch('source/html/**/*.html', ['html']);
});

gulp.task('default', ['css']);

/*gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true,
    open: true
  });
});*/
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "build"
    }
  });
});

/*gulp.task('start', ['connect', 'watch']);*/
gulp.task('start', ['browser-sync', 'watch']);
