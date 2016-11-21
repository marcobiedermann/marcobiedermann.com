import babelify          from 'babelify';
import browserify        from 'browserify';
import critical          from 'critical';
import fs                from 'fs';
import gulp              from 'gulp';
import gulpCleanCss      from 'gulp-clean-css';
import gulpEjsLocals     from 'gulp-ejs-locals';
import gulpEslint        from 'gulp-eslint';
import gulpGhPages       from 'gulp-gh-pages';
import gulpHtmlmin       from 'gulp-htmlmin';
import gulpImagemin      from 'gulp-imagemin';
import gulpJsonlint      from 'gulp-jsonlint';
import gulpPostcss       from 'gulp-postcss';
import gulpRev           from 'gulp-rev';
import gulpSourcemaps    from 'gulp-sourcemaps';
import gulpSvgmin        from 'gulp-svgmin';
import gulpSvgstore      from 'gulp-svgstore';
import gulpUglify        from 'gulp-uglify';
import gulpWebp          from 'gulp-webp';
import path              from 'path';
import postcssCssnext    from 'postcss-cssnext';
import postcssImport     from 'postcss-import';
import postcssModules    from 'postcss-modules';
import postcssReporter   from 'postcss-reporter';
import stylelint         from 'stylelint';
import vinylBuffer       from 'vinyl-buffer';
import vinylSourceStream from 'vinyl-source-stream';

const dirs = {
  source: './source',
  dest  : './dist'
};

function getJSONFromCssModules(cssFileName, json) {
  const cssName      = path.basename(cssFileName, '.css');
  const jsonFileName = path.resolve(`${dirs.dest}/assets/css`, `${cssName}.json`);

  fs.writeFileSync(jsonFileName, JSON.stringify(json));
}

function getClass(module, className) {
  return JSON.parse(fs.readFileSync(path.resolve(`${dirs.dest}/assets/css`, `${module}.json`)).toString())[className];
}

function getRev() {
  return JSON.parse(fs.readFileSync(`${dirs.dest}/assets/rev-manifest.json`));
}

gulp.task('copy', () => {
  return gulp.src([
      `${dirs.source}/**/*.txt`,
      `${dirs.source}/**/*.xml`,
      `${dirs.source}/CNAME`,
      `${dirs.source}/apple-touch-icon-precomposed.png`,
      `${dirs.source}/favicon.ico`,
      `${dirs.source}/favicon.svg`,
      `${dirs.source}/tile-wide.png`,
      `${dirs.source}/tile.png`
    ])
    .pipe(gulp.dest(`${dirs.dest}`));
});

gulp.task('deploy', () => {
  return gulp.src(`${dirs.dest}/**/*`)
    .pipe(gulpGhPages());
});

gulp.task('critical', ['html', 'images', 'svg:assets'], () => {
  return gulp.src('./dist/**/*.html')
    .pipe(critical.stream({
      base: 'dist/',
      css: `${dirs.dest}/assets/css/${getRev()['style.css']}`,
      inline: true
    }))
    .pipe(gulpHtmlmin({
      caseSensitive                : true,
      collapseBooleanAttributes    : true,
      collapseWhitespace           : true,
      minifyCSS                    : true,
      minifyJS                     : true,
      minifyURLs                   : false,
      removeAttributeQuotes        : true,
      removeCDATASectionsFromCDATA : true,
      removeComments               : true,
      removeCommentsFromCDATA      : true,
      removeEmptyAttributes        : true,
      removeOptionalTags           : true,
      removeRedundantAttributes    : true,
      removeScriptTypeAttributes   : true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype              : true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('css', () => {
  return gulp.src(`${dirs.source}/assets/css/style.css`)
    .pipe(gulpSourcemaps.init())
    .pipe(gulpPostcss([
      postcssImport(),
      postcssCssnext({
        features: {
          rem: false
        }
      })
      // ,postcssModules({
      //   getJSON: getJSONFromCssModules,
      //   generateScopedName: '[emoji]'
      // })
    ]))
    .pipe(gulpCleanCss())
    .pipe(gulpRev())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest(`${dirs.dest}/assets/css`))
    .pipe(gulpRev.manifest(`${dirs.dest}/assets/rev-manifest.json`, {
      base : process.cwd() + `${dirs.dest}/assets`,
      merge: true
    }))
    .pipe(gulp.dest(`${dirs.dest}/assets`));
});

gulp.task('fonts', () => {
  return gulp.src(`${dirs.source}/assets/fonts/**/*.{woff,woff2}`)
    .pipe(gulp.dest(`${dirs.dest}/assets/fonts`));
});

gulp.task('html', ['css', 'js', 'svg:icons'], () => {
  return gulp.src(`${dirs.source}/templates/pages/**/*.ejs`)
    .pipe(gulpEjsLocals(
      {
        className: getClass,
        data     : require(`${dirs.source}/data/projects.json`),
        rev      : getRev()
      },
      {
        ext: '.html'
      }
    ))
    .pipe(gulpHtmlmin({
      caseSensitive                : true,
      collapseBooleanAttributes    : true,
      collapseWhitespace           : true,
      minifyCSS                    : true,
      minifyJS                     : true,
      minifyURLs                   : true,
      removeAttributeQuotes        : true,
      removeCDATASectionsFromCDATA : true,
      removeComments               : true,
      removeCommentsFromCDATA      : true,
      removeEmptyAttributes        : true,
      removeOptionalTags           : true,
      removeRedundantAttributes    : true,
      removeScriptTypeAttributes   : true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype              : true
    }))
    .pipe(gulp.dest(`${dirs.dest}`));
});

gulp.task('images:content', () => {
  return gulp.src(`${dirs.source}/content/images/**/*.{gif,ico,jpg,jpeg,png}`)
    .pipe(gulpImagemin())
    .pipe(gulp.dest(`${dirs.dest}/content/images`));
});

gulp.task('images:webp', () => {
  return gulp.src(`${dirs.source}/content/images/**/*.{jpg,jpeg,gif,png}`)
    .pipe(gulpWebp())
    .pipe(gulp.dest(`${dirs.dest}/content/images`));
});

gulp.task('js', () => {
  const b = browserify({
    entries: `${dirs.source}/assets/js/script.js`,
    debug: true,
    transform: [babelify]
  });

  return b.bundle()
    .pipe(vinylSourceStream('script.js'))
    .pipe(vinylBuffer())
    .pipe(gulpSourcemaps.init())
    .pipe(gulpUglify())
    .pipe(gulpRev())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest(`${dirs.dest}/assets/js`))
    .pipe(gulpRev.manifest(`${dirs.dest}/assets/rev-manifest.json`, {
      base : process.cwd() + `${dirs.dest}/assets`,
      merge: true
    }))
    .pipe(gulp.dest(`${dirs.dest}/assets`));
});

gulp.task('lint:css', () => {
  return gulp.src(`${dirs.source}/assets/css/**/*.css`)
    .pipe(gulpPostcss([
      stylelint(),
      postcssReporter()
    ]));
});

gulp.task('lint:js', () => {
  return gulp.src(`${dirs.source}/assets/js/**/*.js`)
    .pipe(gulpEslint());
});

gulp.task('lint:json', () => {
  return gulp.src(`${dirs.source}/data/**/*.json`)
    .pipe(gulpJsonlint())
    .pipe(gulpJsonlint.reporter());
});

gulp.task('svg:assets', () => {
  return gulp.src(`${dirs.source}/assets/images/*.svg`)
    .pipe(gulpSvgmin())
    .pipe(gulp.dest(`${dirs.dest}/assets/images`));
});

gulp.task('svg:content', () => {
  return gulp.src(`${dirs.source}/content/images/**/*.svg`)
    .pipe(gulpSvgmin())
    .pipe(gulp.dest(`${dirs.dest}/content/images`));
});

gulp.task('svg:icons', () => {
  return gulp.src(`${dirs.source}/assets/images/icons/**/*.svg`)
    .pipe(gulpSvgmin())
    .pipe(gulpSvgstore())
    .pipe(gulpRev())
    .pipe(gulp.dest(`${dirs.dest}/assets/images`))
    .pipe(gulpRev.manifest(`${dirs.dest}/assets/rev-manifest.json`, {
      base : process.cwd() + `${dirs.dest}/assets`,
      merge: true
    }))
    .pipe(gulp.dest(`${dirs.dest}/assets`));
});

gulp.task('watch', () => {
  gulp.watch(`${dirs.source}/data/**/*.json`, ['html']);
  gulp.watch(`${dirs.source}/**/*.ejs`, ['html']);
  gulp.watch(`${dirs.source}/assets/css/**/*.css`, ['css', 'html']);
  gulp.watch(`${dirs.source}/assets/js/**/*.js`, ['js', 'html']);
  gulp.watch(`${dirs.source}/assets/images/icons/**/*.svg`, ['svg:icons', 'html']);
});

gulp.task('images', [
  'images:content',
  'images:webp'
]);

gulp.task('svg', [
  'svg:assets',
  'svg:content',
  'svg:icons'
]);

gulp.task('default', [
  'copy',
  'copy:images',
  'fonts',
  'html',
  'svg:content',
  'watch'
]);

gulp.task('build', [
  'copy',
  'critical',
  'fonts',
  'images',
  'svg:content'
]);

gulp.task('lint', [
  'lint:css',
  'lint:js',
  'lint:json'
]);
