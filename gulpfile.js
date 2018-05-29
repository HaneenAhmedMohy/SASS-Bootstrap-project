var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('scss', function () {
  return gulp.src('src/scss/base.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function(){
	return gulp.watch('src/scss/*.scss',['scss']);
});

gulp.task('default',['scss','watch'])