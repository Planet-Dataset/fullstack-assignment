const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const path = require('path');
var MONGODB_URI = process.env.MONGODB_URI;
var PACKAGE = require('./package.json');
var version = PACKAGE.version;

const config = {
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.cjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src')
    },
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.json'
    ],
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
      MONGODB_URI: JSON.stringify(MONGODB_URI),
    }),
  ],
};

module.exports = config;
