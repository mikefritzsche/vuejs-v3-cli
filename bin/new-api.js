const fs = require('fs-extra')
const path = require('path')
const fileSave = require('file-save')
const inquirer = require('inquirer')
const apiPath = '../src/api'
const apiIndexFilePath = path.join(__dirname, apiPath, 'index.js')
const apiImportsJsonPath = path.join(__dirname, apiPath, 'imports.json')

const modules = fs.readdirSync(path.join(__dirname, apiPath, 'modules'))
const apiImports = require(apiImportsJsonPath)

const moduleContent = `export default {\n\n}`

inquirer.prompt([
  {
    type: 'input',
    message: 'API folder name',
    name: 'apiFolderName',
    default: 'analytics'
  },
  {
    type: 'input',
    message: 'Module name',
    name: 'apiModuleName',
    default: 'analytics'
  }
])
.then(answers => {
  const { apiFolderName, apiModuleName } = answers
  console.log('modules: ', modules)
  console.log('answers: ', answers)
  console.log('apiImports: ', apiImports)
  let output = []
  modules.forEach(module => {
    output.push(`import * as ${module} from ./modules/${module}`)
  })
  try {
    const data = fs.readFileSync(apiIndexFilePath, 'utf8')
    const lines = data.split(/\r?\n/);

    const dynamicEndIndex = lines.indexOf('// end dynamic imports')
    lines.splice(dynamicEndIndex, 0, `import * as ${apiModuleName} from '@/api/modules/${apiFolderName}'`)

    const modulesHashIndexStart = lines.indexOf('// modules hash') + 1
    const modulesHashIndexEnd = lines.indexOf('// end modules hash') - 1
    lines.splice(modulesHashIndexStart, modulesHashIndexEnd - modulesHashIndexStart + 1)

    const modulesHashContent = `const modules = {
  ${Object.keys(apiImports).join(',\n\t')},
  ${apiModuleName}
}`
    // Remove current lines with the modules hash values
    lines.splice(lines.indexOf('// modules hash') + 1, 0, modulesHashContent)

    const newLinesContent = lines.join('\n')
    apiImports[apiModuleName] = `@/api/modules/${apiFolderName}`

    // write module index file
    fileSave(path.join(__dirname, apiPath, 'modules', apiFolderName, 'index.js')).write(moduleContent, 'utf8').end('\n')

    // update module imports JSON
    fileSave(apiImportsJsonPath).write(JSON.stringify(apiImports, null, 2), 'utf8').end('\n')

    // update main api index
    fileSave(apiIndexFilePath).write(newLinesContent, 'utf8').end()
  } catch (err) {
    console.error(err)
  }

  console.log('output: ', output)
})
