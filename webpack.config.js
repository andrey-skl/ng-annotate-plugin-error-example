
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var webpackOptions = {
  entry: './app.js',
  output: {
    path: './',
    filename: '[name].js',
  },
  module: {},
  plugins: [
    new ngAnnotatePlugin({
      add: true,
    })
  ]
};

module.exports = webpackOptions;
