const { merge } = require('webpack-merge');
const dotenv = require('dotenv-webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfig = () => {
  return merge([
    {
      mode: 'production',
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        },
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        //new Visualizer({ filename: './statistics.html' }),
        new dotenv({ path: '.env.production' })
      ]
    }
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfig(env));
}
