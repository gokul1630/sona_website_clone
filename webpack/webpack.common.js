const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    asyncChunks: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'ReactApp',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
