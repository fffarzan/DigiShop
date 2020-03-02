var { src, dest, series, watch } = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

/**
 * Build functions
 */

function clean() {
  return del(['./dist']);
}

function img() {
  return src('./assets/img/**')
    .pipe(dest('./dist/assets/img/'));
}

function font() {
  return src('./assets/font/**')
    .pipe(dest('./dist/assets/font/'));
}

function cssLibs() {
  return src('./assets/lib/css/*.css')
    .pipe(dest('./dist/assets/lib/css/'))
}

function jsLibs() {
  return src('./assets/lib/js/*.js')
    .pipe(dest('./dist/assets/lib/js/'))
}

function html() {
  return src('./html/*.html')
    .pipe(dest('./dist/'));
}

function css() {
  return src('./css/*.css')
    .pipe(concat('style.css'))
    .pipe(dest('./dist/'));
}

function js() {
  return src('./js/*.js')
    .pipe(concat('script.js'))
    .pipe(dest('./dist/'));
}

exports.build = series(clean, img, font, cssLibs, jsLibs, html, css, js);

/**
 * Watch functions
 */

function browserSyncing(cb) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  })
  cb();
}

function run(cb) {
  cb();
}

function watchFiles(cb) {
  watch('./asstes/img/**', run).on('change', browserSync.reload);
  watch('./asstes/font/**', run).on('change', browserSync.reload);
  watch('./asstes/lib/css/*.css', run).on('change', browserSync.reload);
  watch('./asstes/lib/js/*.js', run).on('change', browserSync.reload);
  watch('./html/*.html', run).on('change', browserSync.reload);
  watch('./css/*.css', run).on('change', browserSync.reload);
  watch('./js/*.js', run).on('change', browserSync.reload);
  watch('./index.html', run).on('change', browserSync.reload);
  cb();
}

exports.watch = series(watchFiles, browserSyncing);