const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const { PLATFORM, VERSION } = env;

  return merge([
    {
      stats: 'errors-only',
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          modules: __dirname + '/node-modules'
        }
      },
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: { cacheDirectory: true }
              },
              {
                loader: 'eslint-loader',
                options: { fix: true }
              }
            ]
          },
          {
            test: /\.ts[x]?$/,
            use: [
              {
                loader: 'awesome-typescript-loader'
              },
              {
                loader: 'eslint-loader',
                options: { fix: true }
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images/'
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(VERSION),
          'process.env.PLATFORM': JSON.stringify(PLATFORM)
        })
      ]
    }
  ]);
}
