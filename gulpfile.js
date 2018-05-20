var gulp = require('gulp'),
    scss = require('gulp-sass'),
    sourcemap = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    debug = require('gulp-debug'),
    gulpIf = require('gulp-if'),
    twig = require('gulp-twig');

var compressing = false,
    appPath = 'app/',
    destPath = './dist/',
    nodeModulesPath = 'node_modules/',
    paths = {
        css: [
            appPath + 'scss/main.scss'
        ],
        js: [
            nodeModulesPath + 'jquery/dist/jquery.min.js',
            nodeModulesPath + 'tether/dist/js/tether.min.js',
            nodeModulesPath + 'bootstrap/dist/js/bootstrap.min.js',
            nodeModulesPath + 'slideout/dist/slideout.min.js',
            appPath + 'js/**/*.js'
        ]
    };

gulp.task('sass', function() {
    return gulp.src(paths.css)
        .pipe(gulpIf(!compressing, sourcemap.init()))
        .pipe(scss({onError: console.error.bind(console, 'Sass error:')}))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulpIf(!compressing, sourcemap.write()))
        .pipe(gulpIf(compressing, cssnano()))
        .pipe(gulp.dest(destPath + 'css'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe(concat('main.js'))
        .pipe(gulpIf(compressing, uglify()))
        .pipe(gulp.dest(destPath + 'js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function() {
    return gulp.src([
            appPath + 'img/**/*'
        ])
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            use: [pngquant()]
        })))
        .pipe(gulp.dest(destPath + 'img'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src(appPath + 'twig/pages/**/**/*.twig')
      .pipe(twig())
      .pipe(gulp.dest(destPath))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['img', 'sass', 'scripts', 'html'], function() {
    gulp.src(appPath + 'fonts/**/*')
        .pipe(gulp.dest(destPath + 'fonts'));

    gulp.src(appPath + '*.ico')
      .pipe(gulp.dest(destPath));
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir: destPath
        },
        notify: false
    });

    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch([appPath + 'twig/**/**/**/*.twig'], ['html']);
    gulp.watch([appPath + 'js/**'], ['scripts']);
    gulp.watch([appPath + 'img/**/*'], ['img']);
});

gulp.task('deploy', ['clean'], function() {
    compressing = true;
    return gulp.start('build');
});

gulp.task('default', ['serve']);