const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map', // using source maps
  devServer: {
    contentBase: './dist', // serve the files from dist directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Journey',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean up /dist folder
    publicPath: '/', // will be used within our server script
  },
};