/* @flow */
import { resolve, join } from 'path'

export const PROJECT_ROOT = resolve(__dirname, '../../')
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src')
export const DIST_ROOT = join(PROJECT_ROOT, 'dist')
export const MODULE_ROOT = join(PROJECT_ROOT, 'node_modules')
