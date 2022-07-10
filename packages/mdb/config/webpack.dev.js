const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8089/',   // don't forget the slash at the end
  },
  devServer: {
    port: 8089,
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mdbReactMod',
      filename: 'remoteEntry.js',
      exposes: {
        // './MDBReactApp': './src/bootstrap',
        './Button': './src/components/buttons/ButtonMDB'
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
