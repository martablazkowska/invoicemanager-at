var Webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [

    // For hot style updates
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',

    // Our application
    './app/index.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/build')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.html', '.scss', '.css'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ['raw-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
}