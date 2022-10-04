const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const webp = require('gulp-webp');
const rename = require('gulp-rename');

gulp.task('watch', watch);

function buildStyles() {
  const plugins = [
    autoprefixer()
  ];

  return gulp.src('./src/**/*.scss')
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./public/css'))
}

function changeImgFormat() {
  return gulp.src('./src/assets/**/*.{jpg,png}')
  .pipe(webp())
  .pipe(rename({dirname:''}))
  .pipe(gulp.dest('./public/assets'))
}
function copySVGToPublic() {
  return gulp.src('./src/assets/**/*.svg')
  .pipe(rename({dirname:''}))
  .pipe(gulp.dest('./public/assets'))
}

function watch() {
  gulp.watch('./src/**/*.scss', buildStyles);
  gulp.watch('./src/assets/**/*.{jpg,png}', changeImgFormat);
  gulp.watch('./src/assets/**/*.svg', copySVGToPublic);
}