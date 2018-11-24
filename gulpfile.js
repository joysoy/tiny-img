'use strict';

var gulp = require('gulp');

// 安装包后，就是 require('tiny-img')
var tiny = require('./index');

// 可以直接在当前目录进行测试
gulp.task('tinyimg-test', function(cb) {
    gulp.src('test/img/*')
        .pipe(tiny())
        .pipe(gulp.dest('test/dist/img'));
});