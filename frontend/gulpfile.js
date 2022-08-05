const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

gulp.task('watch', watch);

function buildStyles() {
  return gulp.src('./src/**/*.scss')
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css'))
}
function watch() {
  gulp.watch('./src/**/*.scss', buildStyles);
}