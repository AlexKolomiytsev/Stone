'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('styles', function() {

    return gulp.src('content/less/**/*.less'/*, {since: gulp.lastRun('styles')}*/)
        .pipe(debug({title: "src"}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions','last 2 Safari versions','last 2 Explorer versions','last 2 ff versions','last 2 Opera versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('content/css'));
});
gulp.task('scripts', function() {
    return gulp.src('content/js/myScripts/./*.js', {since: gulp.lastRun('scripts')})
        //.pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = '.min.js'
        }))
        .pipe(gulp.dest('content/js/myScripts/production'));
});

gulp.task('clean', function() {
    return del(['content/js/myScripts/production/*.js'/*, 'public/'*/]);
});

gulp.task('build', gulp.series('clean', gulp.parallel(/*'styles',*/'scripts')));

gulp.task('watch', function () {
    gulp.watch('content/js/myScripts/*.js', gulp.series('scripts'));
    //gulp.watch('content/**/*.*', gulp.series('content'));
});

gulp.task('dev', gulp.series('build','watch'));

//gulp.task('content', function () {
//    return gulp.src('content/**/*.*', {since: gulp.lastRun('content')})
//        .pipe(newer('public')
//        .pipe(gulp.dest('public'));
//})

