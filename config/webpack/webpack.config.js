const webpack = require('webpack');
const paths = require('../paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: {
    app: paths.entry,
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {  test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {  test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
      }),
    }),
    new HtmlWebpackPlugin({
      template: paths.template,
    }),
  ]
};

module.exports = webpackConfig;
