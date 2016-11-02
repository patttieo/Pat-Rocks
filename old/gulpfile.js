var gulp = require('gulp'),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    // gutil = require('gulp-util'),
    ftp = require('gulp-ftp');


gulp.task('styles', function () {
    gulp.src('scss/styles.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
        .pipe(livereload())
        .pipe(notify({message: 'stytes be done bro bro' }));
        
});
gulp.task('scripts', function(){
   	gulp.src('js/scripts.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('js'))
        .pipe(livereload())
        .pipe(notify({message: 'scripts task complete' }));
});


gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('js/**/*.js',['scripts']);

});

gulp.task('default', function () {
    gulp.src('/domains/ographix.com/html')
        .pipe(ftp({
            host: 's181166.gridserver.com',
            user: 'ographix.com',
            pass: 'Snowman1231986!'
        }))
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed 
        // this can be a gulp plugin, gulp.dest, or any kind of stream 
        // here we use a passthrough stream 
         .pipe(gutil.noop());
});


