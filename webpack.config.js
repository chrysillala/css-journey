const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const capitalize = (str) => {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

let htmlPageNames = ['test'];
let multipleHtmlPlugins = htmlPageNames.map(page => {
  return new HtmlWebpackPlugin({
    title: `${capitalize(page)}`,
    filename: `${page}.html`,
    template: `src/pages/${page}.html`,
    chunks: [`${page}`] // include only certain chunks
  })
})

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
    test: './src/scripts/test.js'
  },
  devtool: 'inline-source-map', // using source maps
  devServer: {
    contentBase: './dist', // serve the files from dist directory
    // compress: true, // enable gzip compression
    port: 3300,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Journey',
      template: 'index.html',
      chunks: ['index']
    })
  ].concat(multipleHtmlPlugins),
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clean up /dist folder
    publicPath: '/', // will be used within our server script
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};