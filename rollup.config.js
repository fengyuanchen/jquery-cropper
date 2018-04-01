const alias = require('rollup-plugin-alias');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * jQuery Cropper v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/jquery-cropper.js',
      format: 'umd',
      name: 'Cropper',
      globals: {
        jquery: 'jQuery',
        cropperjs: 'Cropper',
      },
    },
    {
      banner,
      file: 'dist/jquery-cropper.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/jquery-cropper.esm.js',
      format: 'es',
    },
    {
      banner,
      file: 'docs/js/jquery-cropper.js',
      format: 'umd',
      name: 'Cropper',
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
    babel({
      plugins: ['external-helpers'],
    }),
  ],
};
