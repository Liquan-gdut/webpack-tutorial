const paths = require('./paths');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: paths.appBuild,
    port: 8080
  }
});
