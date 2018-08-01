const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

gulp.task('dev', () => {
  gulp.watch('src/*', ['build']);
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
