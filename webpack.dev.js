import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

export default merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new WebpackManifestPlugin({})
  ],
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map'
});

