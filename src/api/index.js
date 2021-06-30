import importAllModule from './importAllModule'

const newApi = importAllModule(require.context('./importModules', true, /\.api.js$/), /\.api.js$/g)
console.log('newApi: ', newApi)
const testImportModules = require.context('./testImportModules', true, /\.api.js$/)
let tempImportApi = {}
for (let key of testImportModules.keys()) {
  let keyArr = key.split('/')
  keyArr.shift()
  let moduleName = keyArr.shift()
  // keyArr = keyArr.map(key => {
  //   key = key.replace('.api.js', '').split(/\./g)
  //   return key
  // })
  // keyArr = keyArr.filter(k => !k.includes('.api.js'))
  console.log('moduleName: ', moduleName)
  console.log('keyArr: ', keyArr)
  if (keyArr.length > 1) {
    if (!tempImportApi[moduleName]) tempImportApi[moduleName] = {}
    tempImportApi[moduleName][keyArr[1]] = testImportModules(key)
  }
  else {
    tempImportApi[moduleName] = testImportModules(key).default
  }
}
console.log('testImportApi: ', tempImportApi)

/**
 * Context import will automatically import all index.js files
 */
// const allImports = require.context(
//   './modules',
//   true,
//   /index.js$/,
//   'sync'
// )

import { populateImport } from './methods'
/**
 * DO NOT remove the dynamic imports and modules hash comments as they are used
 * to parse this file when creating a new api module
 */

// dynamic imports
// import * as analytics from '@/api/modules/analytics/index'
// import * as test from '@/api/modules/test'
// import * as champaign from '@/api/modules/champaign'
// import * as push from '@/api/modules/push'
// end dynamic imports


// modules hash
// const modules = {
//   analytics,
// 	test,
// 	champaign,
//   push
// }
// end modules hash

// export statement
// console.log('newApi: ', newApi)
export default function () {
  Object.keys(newApi).forEach(module => {
    populateImport.call(this, {}, newApi[module], module)
  })
}
