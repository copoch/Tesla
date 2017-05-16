/* @flow */
let yargs = require('yargs')
let Command = require('./command')

const argv = yargs
  .usage('用法:\n  $0 <command> [options]')
  .help('h')
  .alias('h', 'help')
  .version()
  .alias('v', 'version')
  .epilog('@2017 Copoch copyright')
  .command(Command.Init)
  .command(Command.Serve)
  .argv

if (!argv._.length) {
  yargs.showHelp()
}
