const puppeteer = require('puppeteer');
const rollupConfig = require('./rollup.config');

process.env.CHROME_BIN = puppeteer.executablePath();
process.env.NODE_ENV = 'test';

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
    },
    files: [
      'node_modules/cropperjs/dist/cropper.css',
      'test/index.js',
      {
        pattern: 'docs/images/*',
        included: false,
      },
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'test/index.js': ['rollup'],
    },
    reporters: ['mocha', 'coverage-istanbul'],
    rollupPreprocessor: {
      plugins: rollupConfig.plugins,
      output: {
        format: 'iife',
        name: 'Anonymous',
        sourcemap: 'inline',
      },
    },
    singleRun: true,
  });
};
