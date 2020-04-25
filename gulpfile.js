/*=================================
=            Variables            =
=================================*/

const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
cssnano = require('gulp-cssnano'),
sourcemaps = require('gulp-sourcemaps'),
notify = require("gulp-notify"),
header = require('gulp-header'),
package = require('./package.json'),
paths = {
    nodeModules: 'node_modules/',
    assets: {
      css: './assets/css',
    }
};

var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

/*==========================================
=        Development tasks [watcher]       =
==========================================*/

/* gulp.task('css') = Watcher for development */
gulp.task('css', function () {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: [].concat(
          paths.nodeModules, /* paths.nodeModules allows us to use imports in scss coming from node modules*/
          require('node-bourbon').includePaths
        )
    })
      .on("error", notify.onError({
        message: "<%= error.message %>",
        title: "SCSS ERROR"
      })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.assets.css))
    .pipe(browserSync.reload({stream:true}));
});


/*========================================
=        Production tasks [build]        =
========================================*/

/* gulp.task('css-min') = Build for production [no sourcemaps/banners] */
gulp.task('css-min', function () {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
                includePaths: [].concat(
                  paths.nodeModules, /* paths.nodeModules allows us to use imports in scss coming from node modules*/
                  require('node-bourbon').includePaths
                )
            }).on("error", notify.onError({
        message: "<%= error.message %>",
        title: "SCSS ERROR"
      })))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.assets.css))
    .pipe(header(banner, { package : package }))
});

/*=============================================
=                Gulp Commands               =
=============================================*/

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('watch', ['css', 'browser-sync'], function () {
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch("./*.html", ['bs-reload']);
});

gulp.task('build', ['css-min']);