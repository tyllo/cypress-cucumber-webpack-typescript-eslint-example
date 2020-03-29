const browserify = require('@cypress/browserify-preprocessor');
// const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const webpack = require('@cypress/webpack-preprocessor');
const webpackOptions = require('../webpack.config.js');


module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);

  // retriesPlugin(on);

  on('task', {
    // eslint-disable-next-line global-require
    // failed: require('cypress-failed-log/src/failed')(),
  });

  on('file:preprocessor', webpack({ webpackOptions }));

  // initPlugin(on, config);

  return config;
};
