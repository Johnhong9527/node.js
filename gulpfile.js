/**
 * Created by Stone on 2016/8/15.
 */
var gulp = require('gulp')
    , gulpless = require('gulp-less')//编译less
    , cssversion = require('gulp-make-css-url-version')//css里路径版本号
    , minifycss = require('gulp-minify-css')//压缩css
    , uglify = require('gulp-uglify')//压缩js
    , clean = require('gulp-clean')//清理文件夹
    , concat = require('gulp-concat')//合并文件
    , rename = require('gulp-rename')//重命名文件
    , jshint = require('gulp-jshint')//检测js:jshint
    , replace = require('gulp-replace')//替换
    , browsersync = require('browser-sync').create()

//编译less
gulp.task('less', function () {
    gulp.watch('./www/less', function () {
        gulp.src('./www/less/{"index","yuyu","init"}.less')
            .pipe(gulpless())
            .pipe(gulp.dest('./www/css'));
    })
});

//browserSync
gulp.task('browsersync', function () {
    browsersync.init({
        proxy: '127.0.0.1:8080',
        baseDir: './www'
    })
});

//合并-压缩-重命名-css
gulp.task('min-concat-rename-css', function () {
    gulp.src(['./www/css/newbieGuide.css', './www/css/safetyGuarantee.css'])
        .pipe(concat('main.css'))//合并成main.css
        .pipe(cssversion())  //css路径加一个版本号
        .pipe(gulp.dest('./www-dist/css'))// 输出一个路径
        .pipe(rename({"suffix": ".min"}))//重命名  main.min.css
        .pipe(minifycss()) //对这个css做压缩处理
        .pipe(gulp.dest('./www-dist/css')); //输出
});

//压缩合并重命名js
gulp.task('min-uglify-rename-js', function () {
    return gulp.src(['./www/js/*.js', './www/js/*/*.js'])
        //.pipe(concat('main.js'))
        //.pipe(gulp.dest('./www-dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('./www-dist/js'));
});

//检查js
gulp.task('jshint', function () {
    gulp.src(['www/js/*'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));//代码报错提示
});

//清除dist文件夹内容
gulp.task('clean', function () {
    return gulp.src(['./www-dist/*'])
        .pipe(clean());
});

//替换文件的版本号
gulp.task('change-html-ver', function () {
    gulp.src('./www/index.html')
        .pipe(replace(/_v=[0-9]{1,}/g, "_v=" + new Date().getTime()))
        .pipe(gulp.dest('./www/'));
});
gulp.task('change-js-ver', function () {
    gulp.src(['./www/js/basedata.js'])
        .pipe(replace(/_v=[0-9]{1,}/g, '_v=' + new Date().getTime()))
        .pipe(gulp.dest('./www/js/'));
});

//复制外部包文件
gulp.task('copy-package', function () {
    var src = './www/components/*';
    var target = './www-dist';
    gulp.src(src, {base: './www'})
        .pipe(gulp.dest(target));
});

//复制html
gulp.task('copy-html', ['cver'], function () {
    var src = ['./www/index.html',
        './www/user/*',
        './www/tpls/*'];
    var target = './www-dist';
    gulp.src(src, {base: './www'})
        .pipe(gulp.dest('./www-dist'));

});

//处理css
gulp.task('css', ['min-concat-rename-css']);

//处理js
gulp.task('js', ['min-uglify-rename-js']);

//更改版本号
gulp.task('cver', ['change-html-ver', 'change-js-ver']);

gulp.task('w-cver', function () {
    gulp.watch(['./www/*.*', './www/tpls/*.*'], function () {
        gulp.start('cver');
    });
});

//全部处理//编译版本
gulp.task('build', ['clean'], function () {
    gulp.start('copy-package', 'copy-html', 'js', 'css');
});





