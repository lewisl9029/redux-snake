'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/app'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
      loaders: [
        'babel'
      ]
    }, { 
      test: /\.css$/, 
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Redux Snake',
      template: './app/app.html'
    }),
    new ExtractTextPlugin("[name].css")
  ]
}; 
