const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
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

gulp.task('build:umd', async () => {
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  });

  bundle.write({
    file: 'dist/parabox.js',
    format: 'umd',
    name: 'parabox',
    sourcemap: true,
  });
});

gulp.task('build:es', async () => {
  const bundle = await rollup.rollup({
    input: './src/index.js',
  });

  bundle.write({
    file: 'dist/parabox.es.js',
    format: 'es',
    sourcemap: true,
  });
});

gulp.task('build', ['build:umd', 'build:es'], async () => {
  gulp.src('src/parabox.css').pipe(gulp.dest('dist'));
});
