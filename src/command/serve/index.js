/* @flow */
let inquirer = require('inquirer')
let webpack = require('webpack')
let webpackConfig = require('./webpack.config')
let path = require('path')
let yargs = require('yargs')
let forever = require('forever-monitor')
let chalk = require('chalk')
let { PROJECT_ROOT } = require('../../../lib')
let { MODULE_ROOT } = require('../../../lib')
let { exec } = require('child_process')

const command = 'serve'
const desc = '运行本地服务器'
const builder = (yargs) => {
  let daemon = new (forever.Monitor)(['webpack-dev-server'], {
    max: 1,
    silent: false,
    cwd: PROJECT_ROOT
  });

  daemon.on('exit', (res) => {
    console.log('\n', chalk.green(' your-filename.js has exited after 3 restarts'), '\n');
  });

  daemon.on('error', (err) => {
    console.log(err)
    console.error('\n',chalk.red(' Error: ' + err.message), '\n')
  })

  return yargs
    .usage('用法:\n  $0 serve <command> [options]')
    .command({
      command: 'start',
      desc: '打开',
      builder: {},
      handler: (argv) => {
        daemon.start()
      }
    })
    .command({
      command: 'stop',
      desc: '关闭',
      builder: {},
      handler: (argv) => {
        daemon.stop()
      }
    })
}
const handler = () => {}

module.exports = {
  command,
  desc,
  builder,
  handler
}
