const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('../config-ejected/webpack.commond/webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/table/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'table',
      remotes: {
        tableMfe: `tableMod@${domain}/mdbreact/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
