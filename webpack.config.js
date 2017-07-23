const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
    {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      { test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'}
    ]
  }
}
