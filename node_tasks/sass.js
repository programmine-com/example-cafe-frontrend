'use strict';

const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const scss = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task('scss', () => {
  console.log('SCSSをCSSにコンパイルします!');

  return gulp.src('./scss/index.scss')
    .pipe(plumber())
    .pipe(scss())
    .pipe(autoprefixer({browsers: ['ie 11', 'safari >= 6', 'Android >= 4', 'last 4 versions']}))
    .pipe(gulp.dest('./css'));
});

gulp.task('scss:watch', () => {
  gulp.watch('./scss/**/*', () => {
    gulp.start('scss');
  });
});

gulp.start('scss');
gulp.start('scss:watch');
