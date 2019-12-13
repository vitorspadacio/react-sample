const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  return merge([
    {
      output: {
        filename:
      },
      stats: 'errors-only',
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: { modules: __dirname + '/node-modules' }
      },
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
              'style-loader',
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
                  outputPath: 'images/',
                  esModule: false,
                }
              }
            ]
          }
        ]
      },
    }
  ]);
}
