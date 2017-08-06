'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({
  
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin({
      title: 'Github APP',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel',
      query: {
          presets: ['es2015', 'react']
      }
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  }
})
