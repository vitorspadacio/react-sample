const merge = require('webpack-merge');
const dotenv = require('dotenv-webpack');

const baseConfig = require('./webpack.base.config');

const devConfig = () => {
  return merge([
    {
      plugins: [
        new dotenv({ path: '.env.development' })
      ]
    }
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), devConfig(env));
}
