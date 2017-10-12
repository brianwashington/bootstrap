var HtmlWebpackPlugin = require('html-webpack-plugin');
/*
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {test: /\.html$/, loader: "raw-loader"}
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
} */

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /(\.html$|\.css$)/, loader: "raw-loader"}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'other.html'
  })]
}
