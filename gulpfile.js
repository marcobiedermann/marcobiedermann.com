const babelify = require('babelify');
const browserify = require('browserify');
const fs = require('fs');
const gulp = require('gulp');
const gulpCleanCss = require('gulp-clean-css');
const gulpEjs = require('gulp-ejs');
const gulpEslint = require('gulp-eslint');
const gulpHashChanged = require('gulp-hash-changed');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpIf = require('gulp-if');
const gulpImagemin = require('gulp-imagemin');
const gulpJsonlint = require('gulp-jsonlint');
const gulpPostcss = require('gulp-postcss');
const gulpRev = require('gulp-rev');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpSvgmin = require('gulp-svgmin');
const gulpSvgstore = require('gulp-svgstore');
const gulpUglify = require('gulp-uglify');
const gulpWebp = require('gulp-webp');
const path = require('path');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssReporter = require('postcss-reporter');
const stylelint = require('stylelint');
const vinylBuffer = require('vinyl-buffer');
const vinylSourceStream = require('vinyl-source-stream');

const dirs = {
  source: './source',
  dest: './docs',
};

function getClass(module, className) {
  return JSON.parse(fs.readFileSync(path.resolve(`${dirs.dest}/assets/css`, `${module}.json`)).toString())[className];
}

function getJSON(file) {
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

gulp.task('copy', () => gulp.src([
  `${dirs.source}/**/*.txt`,
  `${dirs.source}/**/*.xml`,
  `${dirs.source}/CNAME`,
  `${dirs.source}/apple-touch-icon-precomposed.png`,
  `${dirs.source}/favicon.ico`,
  `${dirs.source}/favicon.svg`,
  `${dirs.source}/manifest.json`,
  `${dirs.source}/tile-wide.png`,
  `${dirs.source}/tile.png`,
])
  .pipe(gulp.dest(`${dirs.dest}`)));

gulp.task('css', () => gulp.src(`${dirs.source}/assets/css/style.css`)
  .pipe(gulpSourcemaps.init())
  .pipe(gulpPostcss([
    postcssImport(),
    postcssCssnext({
      features: {
        rem: false,
      },
    }),
  ]))
  .pipe(gulpCleanCss())
  .pipe(gulpRev())
  .pipe(gulpSourcemaps.write('.'))
  .pipe(gulp.dest(`${dirs.dest}/assets/css`))
  .pipe(gulpRev.manifest(`${dirs.dest}/assets/rev-manifest.json`, {
    base: `${process.cwd()}${dirs.dest}/assets`,
    merge: true,
  }))
  .pipe(gulp.dest(`${dirs.dest}/assets`)));

gulp.task('fonts', () => gulp.src(`${dirs.source}/assets/fonts/**/*.{woff,woff2}`)
  .pipe(gulp.dest(`${dirs.dest}/assets/fonts`)));

gulp.task('html', ['css', 'js', 'svg:icons'], () => gulp.src(`${dirs.source}/templates/pages/**/*.ejs`)
  .pipe(gulpEjs({
    className: getClass,
    data: getJSON(`${dirs.source}/data/projects.json`),
    rev: getJSON(`${dirs.dest}/assets/rev-manifest.json`),
  }, {}, {
    ext: '.html',
  }))
  .pipe(gulpHtmlmin({
    caseSensitive: true,
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: false,
    removeAttributeQuotes: true,
    removeCDATASectionsFromCDATA: true,
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  }))
  .pipe(gulp.dest(`${dirs.dest}`)));

gulp.task('images:content', () => {
  gulp.src(`${dirs.source}/content/images/**/*.{gif,ico,jpg,jpeg,png}`)
    .pipe(gulpIf(
      gulpHashChanged(),
      gulpImagemin(),
    ))
    .pipe(gulp.dest(`${dirs.dest}/content/images`));
});

gulp.task('images:webp', () => gulp.src(`${dirs.source}/content/images/**/*.{jpg,jpeg,gif,png}`)
  .pipe(gulpWebp())
  .pipe(gulp.dest(`${dirs.dest}/content/images`)));

gulp.task('js', () => {
  const b = browserify({
    entries: `${dirs.source}/assets/js/script.js`,
    debug: true,
    transform: [babelify],
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
      base: `${process.cwd()}${dirs.dest}/assets`,
      merge: true,
    }))
    .pipe(gulp.dest(`${dirs.dest}/assets`));
});

gulp.task('lint:css', () => gulp.src(`${dirs.source}/assets/css/**/*.css`)
  .pipe(gulpPostcss([
    stylelint(),
    postcssReporter(),
  ])));

gulp.task('lint:js', () => gulp.src(`${dirs.source}/assets/js/**/*.js`)
  .pipe(gulpEslint()));

gulp.task('lint:json', () => gulp.src(`${dirs.source}/**/*.json`)
  .pipe(gulpJsonlint())
  .pipe(gulpJsonlint.reporter()));

gulp.task('svg:assets', () => gulp.src(`${dirs.source}/assets/images/*.svg`)
  .pipe(gulpSvgmin())
  .pipe(gulp.dest(`${dirs.dest}/assets/images`)));

gulp.task('svg:content', () => gulp.src(`${dirs.source}/content/images/**/*.svg`)
  .pipe(gulpSvgmin())
  .pipe(gulp.dest(`${dirs.dest}/content/images`)));

gulp.task('svg:icons', () => gulp.src(`${dirs.source}/assets/images/icons/**/*.svg`)
  .pipe(gulpSvgmin())
  .pipe(gulpSvgstore())
  .pipe(gulpRev())
  .pipe(gulp.dest(`${dirs.dest}/assets/images`))
  .pipe(gulpRev.manifest(`${dirs.dest}/assets/rev-manifest.json`, {
    base: `${process.cwd()}${dirs.dest}/assets`,
    merge: true,
  }))
  .pipe(gulp.dest(`${dirs.dest}/assets`)));

gulp.task('watch', () => {
  gulp.watch(`${dirs.source}/data/**/*.json`, ['html']);
  gulp.watch(`${dirs.source}/**/*.ejs`, ['html']);
  gulp.watch(`${dirs.source}/assets/css/**/*.css`, ['html']);
  gulp.watch(`${dirs.source}/assets/js/**/*.js`, ['html']);
  gulp.watch(`${dirs.source}/assets/images/icons/**/*.svg`, ['html']);
});

gulp.task('images', [
  'images:content',
  'images:webp',
]);

gulp.task('svg', [
  'svg:assets',
  'svg:content',
  'svg:icons',
]);

gulp.task('default', [
  'copy',
  'fonts',
  'html',
  'images',
  'svg:assets',
  'svg:content',
  'watch',
]);

gulp.task('build', [
  'copy',
  'fonts',
  // 'images',
  'svg:assets',
  'svg:content',
]);

gulp.task('lint', [
  'lint:css',
  'lint:js',
  'lint:json',
]);
