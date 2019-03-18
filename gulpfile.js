var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
 
gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
});

//Esse serviço funciona com parceria do listener 'sass --watch'
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });

    // gulp.watch("app/styles/scss/*.scss").on('change', reload);
    gulp.watch('app/styles/css/*.css').on('change', reload);
    gulp.watch("app/*.html").on('change', reload);
});
