import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    //filename: 'main.js',
    filename: '[name].[contenthash].js',
    path: path.resolve('dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      filename: 'index.html',
      template: 'index.hbs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  }
};