
import { join, resolve } from 'path'
import webpack from 'webpack'
import { version } from '../package.json'
import fs from 'fs'

// context
// ---
let context = process.cwd()

// entry
// ---
let entry = {
  index: resolve('src', 'index.js')
}

// output
// ---
let output = {
  path: resolve(context, 'dist'),
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
    },
    // {
    //   test: /\.json$/,
    //   use: 'json-loader'
    // }
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

// externals
// ---
let externals = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    externals[mod] = 'commonjs ' + mod;
  });

// devServer
// ---
// let devServer = {
//   watchContentBase: true,
//   contentBase: process.cwd(),
//   inline: true,
//   disableHostCheck: true,
//   port: 9999
// }

// node
// ---
let node = {
  __filename: false,
  __dirname: false
}

// export
// ---
export default {
  context,
  entry,
  output,
  module,
  plugins,
  // devServer,
  target: 'node',
  externals,
  node
}
