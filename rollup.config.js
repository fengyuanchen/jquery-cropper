const alias = require('rollup-plugin-alias');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const createBanner = require('create-banner');
const pkg = require('./package');

const banner = createBanner({
  data: {
    name: 'jQuery Cropper',
    year: '2018-present',
  },
});

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      globals: {
        jquery: 'jQuery',
        cropperjs: 'Cropper',
      },
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
    },
    {
      banner,
      file: `docs/js/${pkg.name}.js`,
      format: 'umd',
      globals: {
        jquery: 'jQuery',
        cropperjs: 'Cropper',
      },
    },
  ],
  external: ['jquery', 'cropperjs'],
  plugins: [
    alias({
      cropperjs: 'node_modules/cropperjs/src/index.js',
    }),
    nodeResolve(),
    commonjs(),
    babel(),
  ],
};
