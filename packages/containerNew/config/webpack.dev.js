const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:9080/'   // don't forget the slash at the end
  },
  devServer: {
    port: 9080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mdbReactMfe: 'mdbReactMod@http://localhost:8089/remoteEntry.js',
        mdbMfe: 'mdbMod@http://localhost:8088/remoteEntry.js',
        tableMfe: 'tableMod@http://localhost:9090/remoteEntry.js'
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
