const gulp = require('gulp');
const rollup = require('rollup');
const browserSync = require('browser-sync').create();

gulp.task('dev', async () => {
  gulp.watch('src/*', ['build']);
});

gulp.task('dev:demo', async () => {
  browserSync.init({
    server: {
      baseDir: './example/',
      directory: true,
    },
    startPath: '/index.html',
  });

  gulp.watch('example/*.html').on('change', browserSync.reload);
  gulp.watch('example/*.css').on('change', browserSync.reload);
  gulp.watch('src/*', ['build']).on('change', browserSync.reload);
});

gulp.task('build', async () => {
  const bundle = await rollup.rollup({
    input: './src/index.js',
  });

  // write for the demos
  bundle.write({
    file: 'example/parabox/parabox.js',
    format: 'umd',
    name: 'parabox',
  });

  bundle.write({
    file: 'example/parabox/parabox.es.js',
    format: 'es',
  });

  // Write for dist
  bundle.write({
    file: 'dist/parabox.js',
    format: 'umd',
    name: 'parabox',
  });

  bundle.write({
    file: 'dist/parabox.es.js',
    format: 'es',
  });

  gulp
    .src('src/parabox.css')
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('example/parabox'));
});
