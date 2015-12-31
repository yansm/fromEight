// 载入外挂
var gulp = require('gulp'),  
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	//reactify = require('reactify'),
	//del = require('del'),
	uglify = require('gulp-uglify'),
	//notify = require('gulp-notify'),
	buffer = require('vinyl-buffer'),
	less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	//imagemin = require('gulp-imagemin'),
	//cache = require('gulp-cache'),
	rename = require('gulp-rename');
var //rev  = require('gulp-rev'),//加MD5后缀
	clean = require('gulp-clean'),//清理文件
	//revReplace = require('gulp-rev-replace'),//替换引用的加了md5后缀的文件名，修改过，用来加cdn前缀
	//vinylPaths = require('vinyl-paths'),//操作pipe中文件路径的，加md5的时候用到了
	runSequence = require('run-sequence'),//控制task顺序
	server = require('gulp-express');
var paths = {
	css: ['./static/styles/**'],
	js: ['./static/js/**'],
	images: ['./static/images/**/*.*'],
    app_css: ['./static/styles/app.less'],
    app_js: ['./static/js/app.js'],
    dest_css: './public/stylesheets',
    dest_js: './public/javascripts',
    dest_image: './public/images',

};


gulp.task('styles', function() {  
  return gulp.src(paths.app_css)
	.pipe(concat('app.css'))
    .pipe(less({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(paths.dest_css))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.dest_css))
});

gulp.task('js', function() {
  // Browserify/bundle the JS.
  return browserify({
		entries: paths.app_js
		,paths: ['./node_modules','./static/js/']
	})
    //.transform(reactify)
    .bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(paths.dest_js))
	.pipe(rename({ suffix: '.min' }))
	.pipe(buffer())
	.pipe(uglify())
    .pipe(gulp.dest(paths.dest_js));
});

// 图片
gulp.task('images', function() {  
  return gulp.src(paths.images)
   // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(paths.dest_image))
});

// 预设任务
gulp.task('default', function() {  
    gulp.start('styles', 'js','images');
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.css, ['styles','images']);
  gulp.watch(paths.images, ['images']);
});
 
gulp.task('server', function() {
	//server.run(['app.js']);
	gulp.watch(paths.css, ['styles']);
	gulp.watch(['./pubilc/**/**'], function(event){
        server.notify(event);
    });
});


