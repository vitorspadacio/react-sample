const { merge } = require('webpack-merge')
const dotenv = require('dotenv-webpack')

const baseConfig = require('./webpack.base.config')

const devConfig = () => merge([
  {
    mode: 'development',
    plugins: [
      // eslint-disable-next-line new-cap
      new dotenv({ path: '.env.development' }),
    ],
  },
])

module.exports = (env) => merge(baseConfig(env), devConfig(env))
