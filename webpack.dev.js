const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map', // using source maps
   devServer: {
     contentBase: './dist', // serve the files from dist directory
     port: 3300,
     hot: true,
   },
 });