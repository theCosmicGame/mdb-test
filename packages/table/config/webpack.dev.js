const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:9090/'   // don't forget the slash at the end
  },
  devServer: {
    port: 9090,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'tableMod',
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
