'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack/webpack.common');
const developmentConfig = require('./webpack/webpack.dev');
const productionConfig = require('./webpack/webpack.prod');

module.exports = (_env, argv) => {
  const config =
    argv.mode === 'development' ? developmentConfig : productionConfig;
  return merge(common, config);
};
