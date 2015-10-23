var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', ['javascript', 'sass', 'sass-minify']);

gulp.task('javascript', function(){
  gulp.src('./src/js/caramel.js')
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(rename('caramel.min.js'))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('sass', function(){
  gulp.src('./src/css/caramel.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(rename('caramel.css'))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass-minify', function(){
  gulp.src('./src/css/caramel.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('caramel.min.css'))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./src/css/**/*.scss', ['sass', 'sass-minify']);
});
