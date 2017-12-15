var gulp = require('gulp');
var scss = require('gulp-scss');
var autoprefixer = require('gulp-autoprefixer');
var compress = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

gulp.task('css', function () {
    return gulp.src(['./scss/style.scss'])
        .pipe(gulp.dest('./scss'))
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.init())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
});

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        // .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('img', function () {
    return gulp.src('./img/*')
        .pipe(compress({
            verbose: true
        }))
        .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', ['css']);
    gulp.watch('./img/*', ['img']);
    gulp.watch('./js/*', ['js']);
});


gulp.task('default', ['css','js','watch','img']);
