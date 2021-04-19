const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const capitalize = (str) => {
  // ex: landing-page -> Landing Page
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const camelCase = (str) => {
  // ex: landing-page -> landingPage
  return str.split('-')
    .map((word, index) => {
      return index !== 0
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word.toLowerCase()
    })
    .join('');
}

let htmlPageNames = ['test', 'landing-page', 'people-list', 'links-navigation', 'real-estate-components'];
let multipleHtmlPlugins = htmlPageNames.map(page => {
  return new HtmlWebpackPlugin({
    title: `${capitalize(page)}`,
    filename: `${page}.html`,
    template: `src/pages/${page}.html`,
    chunks: [`${camelCase(page)}`] // include only certain chunks
  })
})

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
    test: './src/scripts/test.js',
    landingPage: './src/scripts/landing-page.js',
    peopleList: './src/scripts/people-list.js',
    linksNavigation: './src/scripts/links-navigation.js',
    realEstateComponents: './src/scripts/real-estate-components.js',
  },
  devtool: 'inline-source-map', // using source maps
  devServer: {
    contentBase: './dist', // serve the files from dist directory
    // compress: true, // enable gzip compression
    port: 3300,
    hot: true,
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
    clean: true, // clean up /dist folder after each build
    publicPath: '/', // will be used within our server script
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};