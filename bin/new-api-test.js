const fs = require('fs-extra')
const path = require('path')
// const fileSave = require('file-save')
const inquirer = require('inquirer')
const apiPath = '../src/api'
const modulesPath = 'testImportModules'

const apiIUrlsPath = path.join(__dirname, apiPath, modulesPath, 'apiUrls.js')

const modules = fs.readdirSync(path.join(__dirname, apiPath, 'testImportModules'))
let apiUrls = fs.readFileSync(apiIUrlsPath, 'utf8')
let apiUrlsJson = fs.readFileSync(path.join(__dirname, apiPath, modulesPath, 'apiurls.json'), 'utf8')

// const moduleContent = `export default {\n\n}`

inquirer.prompt([
  {
    type: 'input',
    message: 'API name',
    name: 'apiName',
    default: ''
  },
  {
    type: 'input',
    message: 'API url',
    name: 'apiUrl',
    default: ''
  },
])
  .then(answers => {
    let apiUrlsObj = JSON.parse(apiUrlsJson)
    apiUrls = apiUrls.trim().split(/\r?\n/)

    console.log('answers: ', answers)
    console.log('apiUrls: ', apiUrls)
    console.log('modules: ', modules)
    console.log('apiUrlsObj: ', apiUrlsObj)

    const reg = /export\s*const\s*[a-z]*\s=\s*'([a-zA-Z0-9/{2}:]*)/
    let urlExports = apiUrls.reduce((acc, url) => {
      const match = url.match(reg)
      acc.push(match[1])
      return acc
    }, [])
    console.log('urlExports: ', urlExports)
    // apiUrlsObj[answers.apiName] = answers.apiUrl
    // for (let api in apiUrlsObj) {
    //   console.log('api: ', api, apiUrlsObj[api])
    // }
  })
// .then(answers => {
//   const { apiFolderName, apiModuleName } = answers
//   console.log('modules: ', modules)
//   console.log('answers: ', answers)
//   console.log('apiImports: ', apiImports)
//   let output = []
//   modules.forEach(module => {
//     output.push(`import * as ${module} from ./modules/${module}`)
//   })
//   try {
//     const data = fs.readFileSync(apiIndexFilePath, 'utf8')
//     const lines = data.split(/\r?\n/);
//
//     const dynamicEndIndex = lines.indexOf('// end dynamic imports')
//     lines.splice(dynamicEndIndex, 0, `import * as ${apiModuleName} from '@/api/modules/${apiFolderName}'`)
//
//     const modulesHashIndexStart = lines.indexOf('// modules hash') + 1
//     const modulesHashIndexEnd = lines.indexOf('// end modules hash') - 1
//     lines.splice(modulesHashIndexStart, modulesHashIndexEnd - modulesHashIndexStart + 1)
//
//     const modulesHashContent = `const modules = {
//   ${Object.keys(apiImports).join(',\n\t')},
//   ${apiModuleName}
// }`
//     // Remove current lines with the modules hash values
//     lines.splice(lines.indexOf('// modules hash') + 1, 0, modulesHashContent)
//
//     const newLinesContent = lines.join('\n')
//     apiImports[apiModuleName] = `@/api/modules/${apiFolderName}`
//
//     // write module index file
//     fileSave(path.join(__dirname, apiPath, 'modules', apiFolderName, 'index.js')).write(moduleContent, 'utf8').end('\n')
//
//     // update module imports JSON
//     fileSave(apiImportsJsonPath).write(JSON.stringify(apiImports, null, 2), 'utf8').end('\n')
//
//     // update main api index
//     fileSave(apiIndexFilePath).write(newLinesContent, 'utf8').end()
//   } catch (err) {
//     console.error(err)
//   }
//
//   console.log('output: ', output)
// })
