/**
 * Created by nickjaremek on 16/12/15.
 */

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel'
    },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browser=last 2 versions'
      }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};