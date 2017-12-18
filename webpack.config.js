var webpack = require('webpack');
var path = require('path');

var build_directory = path.resolve(__dirname, 'src/build');
var app_directory = path.resolve(__dirname, 'src/app');

var config = {
  entry: app_directory + '/index.js',
  output: {
    path: build_directory,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {test : /\.js$/, include : app_directory, loader : 'babel-loader' },
      {test : /(\.css)$/, loaders : ['style-loader', 'css-loader'] }
    ]
  }

};

module.exports = config;