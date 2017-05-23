var Webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [

    // Our application
    './app/index.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/build')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
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