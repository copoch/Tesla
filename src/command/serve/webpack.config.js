/* @flow */
let { join, resolve } = require('path')
let webpack = require('webpack')
let fs = require('fs')
let cwd = process.cwd()
let { version } = require(join(cwd, 'package.json'))

// context
// ---
let context = cwd

// entry
// ---
let entry = {
  index: resolve('src', 'index.js')
}

// output
// ---
let output = {
  path: resolve(cwd, 'dist'),
  filename: '[name].js',
  publicPath: 'dist'
}

// module
// ---
let moduleConfig = {
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

// externals
// ---
let externals = {}

if (fs.statSync(join(cwd, 'package.json')).isDirectory()) {
  fs.readdirSync('node_modules')
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
      externals[mod] = 'commonjs ' + mod;
    });
}

// devServer
// ---
let devServer = {
  watchContentBase: true,
  contentBase: cwd,
  inline: true,
  disableHostCheck: true,
  port: 9999
}

// node
// ---
let nodeConfig = {
  __filename: false,
  __dirname: false
}

// export
// ---
module.exports = {
  context: context,
  entry: entry,
  output: output,
  module: moduleConfig,
  plugins: plugins,
  devServer: devServer,
  target: 'node',
  externals: externals,
  node: nodeConfig
}
