const fileSave = require('file-save')
const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const kebabcase = require('kebab-case')
const uppercamelcase = require('uppercamelcase')
const appsPath = path.join(__dirname, '../src/apps')

const mainAppOptionsTemplateContent = require('../build/js/component-templates/options-api/main-app-template-content')
const mainAppOptionsScriptContent = require('../build/js/component-templates/options-api/main-app-script-content')
const mainComponentContent = require('../build/js/component-templates/options-api/main-app-template-content')

const jsTestContent = require('../build/js/unit-test')

const directoryNames = fs.readdirSync(appsPath)

inquirer
  .prompt([
      {
        type: 'list',
        message: 'App name:',
        name: 'appName',
        choices: directoryNames,
        validate: function (answer) {
          console.log('apps answer: ', answer)
          if (answer.length < 1) return 'You must select an existing app. If none exist, create an app first.'
        }
      },
      {
        type: 'input',
        message: 'Component name:',
        name: 'name'
      },
    {
        type: 'input',
        message: 'Subdirectory name (if needed):',
        name: 'subdirectory'
      },
      {
        type: 'list',
        message: 'Component Type:',
        name: 'type',
        choices: [
          'Options API', 'Composition API'
        ],
        validate: function (answer) {
          if (answer.length < 1) {
            return 'You must choose at least one topping.'
          }
          return true
        }
      },
      {
        type: 'list',
        message: 'Script language:',
        name: 'language',
        choices: ['javascript', 'typescript']
      },
      {
        type: 'list',
        message: 'Create tests',
        name: 'tests',
        choices: ['yes', 'no']
      }
    ]
  )
  .then(answers => {
    const { appName, name, subdirectory, language, tests } = answers
    const ComponentName = uppercamelcase(name)
    const componentNameKebab = kebabcase(ComponentName).replace(/^-/, '')
    const unitTestComponentImportPath = `@/apps/${appName}/${componentNameKebab}`

    const selectedAppPath = path.resolve(__dirname, appsPath, appName)
    //
    // const styleContent = `<style lang="scss" scoped></style>`
    //
    const files = [
      {
        name: `component`,
        filename: `${ComponentName}.vue`,
        content: `${mainComponentContent}\n${mainAppOptionsScriptContent(ComponentName)}\n\n${styleContent}`
      },
      {
        name: `test-spec`,
        filename: `__tests__/${appName}.spec.js/`,
        content: jsTestContent(ComponentName, appName)
      }
    ]

    // files.forEach(file => {
    //   console.log('path.join: ', path.join(AppsPath, file.filename))
    //
    //   fileSave(path.join(AppsPath, file.filename)).write(file.content, 'utf8').end('\n')
    // })
    console.log({ComponentName, componentNameKebab, unitTestComponentImportPath, selectedAppPath, appName, name, subdirectory, language, tests})
    console.log(JSON.stringify(answers, null, '  '))
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    }
    else {
      // Something else went wrong
    }
  })
