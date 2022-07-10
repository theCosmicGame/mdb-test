const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8088/',   // don't forget the slash at the end
  },
  devServer: {
    port: 8088,
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mdbMod',
      filename: 'remoteEntry.js',
      exposes: {
        // './MDBReactApp': './src/bootstrap',
        './ButtonNpm': './src/components/buttons/ButtonMDB'
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
