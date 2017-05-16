/* @flow */
let { resolve, join } = require('path')

// 获取项目根目录
let getProjectRoot = (path = __dirname) => {
  let pathSeg = path.split('/')
  let teslaIndex = pathSeg.indexOf('Tesla') || pathSeg.indexOf('tesla')

  if (teslaIndex !== -1) {
    if (teslaIndex === pathSeg.length - 1) {
      return path
    } else {
      return pathSeg.slice(0, teslaIndex + 1).join('/')
    }
  } else {
    console.err('工具出错')
    return ''
  }
}

const PROJECT_ROOT = getProjectRoot()
const SOURCE_ROOT = join(PROJECT_ROOT, 'src')
const DIST_ROOT = join(PROJECT_ROOT, 'dist')
const MODULE_ROOT = join(PROJECT_ROOT, 'node_modules')

exports.PROJECT_ROOT = PROJECT_ROOT
exports.SOURCE_ROOT = SOURCE_ROOT
exports.DIST_ROOT = DIST_ROOT
exports.MODULE_ROOT = MODULE_ROOT

module.exports = {
  PROJECT_ROOT,
  SOURCE_ROOT,
  DIST_ROOT,
  MODULE_ROOT
}
