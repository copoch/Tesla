let inquirer = require('inquirer')

const command = 'init'
const desc = '新建任务'
const builder = {
  vue: {
    default: 'true',
    describe: '基于 Vue.js 体系的移动端解决方案'
  },
  react: {
    default: 'false',
    describe: '基于 React.js 体系的 PC 端解决方案'
  }
}
const questions = [
  {
    type: 'list',
    name: 'suite',
    message: '请选择套件',
    choices: [
      {
        key: 'Vue',
        name: 'Vue   : 基于 Vue.js 体系的移动端解决方案',
        value: 'Vue',
        short: '基于 Vue.js 体系的移动端解决方案'
      },
      {
        key: 'React',
        name: 'React : 基于 React.js 体系的 PC 端解决方案',
        value: 'React',
        short: '基于 React.js 体系的 PC 端解决方案'
      }
    ]
  },
  {
    type: 'list',
    name: 'type',
    message: '请选择',
    choices: [
      {
        key: 'project',
        name: '项目',
        value: 'Project',
        short: '项目'
      },
      {
        key: 'Page',
        name: '页面',
        value: 'Page',
        short: '页面'
      },
      {
        key: 'Component',
        name: '组件',
        value: 'Component',
        short: '组件'
      }
    ]
  },
]
const handler = (argv) => {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers)
    // Use user feedback for... whatever!!
  });
}

module.exports = {
  command,
  desc,
  builder,
  handler
}
