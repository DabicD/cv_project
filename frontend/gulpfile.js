const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

gulp.task('watch', watch);

function buildStyles() {
  const plugins = [
    autoprefixer()
  ];

  return gulp.src('./src/**/*.scss')
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./public/css'))
}
function watch() {
  gulp.watch('./src/**/*.scss', buildStyles);
}