/**
 * Created by Tuffy on 2017/3/28.
 */
'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const angularTemplatecache = require('gulp-angular-templatecache');
const replace = require('gulp-replace');

// tmpl
gulp.task('tmpl-min', function () {
    gulp.src('demo/template/**/*.html')
        .pipe(angularTemplatecache())
        .pipe(rename('firefly.tmpl.js'))
        .pipe(replace('angular.module(\'templates\').run([\'$templateCache\', function($templateCache) {', ''))
        .pipe(replace('}]);', ''))
        .pipe(replace('$templateCache', '$f.$templateCache'))
        .pipe(gulp.dest('demo/build'));
});

//压缩js文件
gulp.task('js-min',function(){
    gulp.src(['firefly-template.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});