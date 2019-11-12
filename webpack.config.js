const path = require('path');
const webpackDashboard = require('webpack-dashboard/plugin');
module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  externals: {
    config: JSON.stringify({
      url: 'https://api.chucknorris.io/jokes/random'
    })
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpackDashboard()],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    }
  }
};
