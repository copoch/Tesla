
import { join, resolve } from 'path'
import webpack from 'webpack'
import { version } from '../package.json'
import { PROJECT_ROOT } from '../lib'

// context
// ---
let context = PROJECT_ROOT

// entry
// ---
let entry = {
  index: resolve('src', 'index.js')
}

// output
// ---
let output = {
  path: resolve(PROJECT_ROOT, 'dist'),
  filename: '[name].js',
  publicPath: 'dist'
}

// module
// ---
let module = {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
  ]
}

// plugins
// ---
const bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "build tool": "Tesla v' + version + '" }\n',
  raw: true
})
let plugins = []
plugins.push(bannerPlugin)

// devServer
// ---
let devServer = {
  watchContentBase: true,
  inline: true,
  disableHostCheck: true,
  port: 9999
}

// export
// ---
export default {
  context,
  entry,
  output,
  module,
  plugins,
  devServer
}
