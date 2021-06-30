const fs = require('fs-extra')
const fileSave = require('file-save')
const path = require('path')
const inquirer = require('inquirer')
const kebabcase = require('kebab-case')
const uppercamelcase = require('uppercamelcase')
const appsPath = path.join(__dirname, '../src/apps')
const mainAppOptionsTemplateContent = require('../build/js/component-templates/options-api/main-app-template-content')
const mainAppOptionsScriptContent = require('../build/js/component-templates/options-api/main-app-script-content')
const mainComponentContent = require('../build/js/component-templates/options-api/main-app-template-content')
const jsTestContent = require('../build/js/unit-test')

inquirer
  .prompt([
    {
        type: 'input',
        message: 'App name',
        name: 'name'
    },
    {
        type: 'list',
        message: 'Type',
        name: 'type',
        choices: ['Options API', 'Composition API']
    },
    {
        type: 'list',
        message: 'Script language',
        name: 'language',
        choices: ['javascript', 'typescript']
    },
    {
        type: 'list',
        message: 'Create tests',
        name: 'tests',
        choices: ['no', 'yes']
    }
  ])
  .then(answers => {
    // const { name, component, language, tests } = answers
    const ComponentName = uppercamelcase(answers.name)
    const appNameKebab = kebabcase(answers.name.replace(/\s/g, '-'))
    // const unitTestComponentImportPath = `@/apps/${appNameKebab}/${componentName}`

    const AppsPath = path.resolve(__dirname, appsPath, appNameKebab)

    const styleContent = `<style lang="scss" scoped></style>`

    const files = [
      {
        name: `component`,
        filename: `${ComponentName}.vue`,
        content: `${mainComponentContent}\n${mainAppOptionsScriptContent(ComponentName)}\n\n${styleContent}`
      },
      {
        name: `test-spec`,
        filename: `__tests__/${appNameKebab}.spec.js/`,
        content: jsTestContent(ComponentName, appNameKebab)
      }
    ]

    files.forEach(file => {
      console.log('path.join: ', path.join(AppsPath, file.filename))

      // fileSave(path.join(AppsPath, file.filename)).write(file.content, 'utf8').end('\n')
    })

    // const mainComponentFile = `${componentName}.vue`
    // fs.writeFileSync(`${appsPath}/${appNameKebab}/${mainComponentFile}`, mainComponentContent(componentName))

    console.log(ComponentName, appNameKebab)
    console.log(JSON.stringify(answers, null, 2));

  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  // function toUpper(str) {
  //   return str
  //       .toLowerCase()
  //       .split(' ')
  //       .map(word => {
  //           return word[0].toUpperCase() + word.substr(1);
  //       })
  //       .join(' ');
  //  }
