const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const kebabcase = require('kebab-case')

const componentsFile = require('../build/components.json')

/** file paths */
const componentsFilePath = path.join(__dirname, '../build/components.json')

const componentContent = require('../build/component-templates/composition-api/simple-component-content.js')
const testsContent = require('../build/tests-content.js')

const apiUrlsPath = path.join(__dirname, '../build/apiUrls.json')
let apiUrls = fs.readJsonSync(apiUrlsPath, { throws: false })
if (apiUrls === null) {
    apiUrls = {}
    console.log(apiUrls)
}

/** node cli prompt */
inquirer.prompt(
    {
      type: 'input',
      name: 'componentName',
      message: chalk.blue('Enter component name:'),
      default: '',
      askAnswered: true,
      validate: function(value) {
        if (!value.trim()) {
          return 'Please enter a component name'
        }
        if (componentsFile[uppercamelcase(value.trim())]) {
          return `${uppercamelcase(value.trim())} component already exists.`
        }
        return true
      }
    })
    .then(answers => {
        const answerComponentname = kebabcase(answers.componentName.trim())
        const ComponentName = uppercamelcase(answerComponentname)
        const ComponentPath = path.resolve(__dirname, '../src/components', ComponentName)
        
        /** component index import statement */
        // const importStatement = `import ${ComponentName} from './${ComponentName}.vue'`

        const Files = [
            {
                name: 'component',
                filename: `./${ComponentName}.vue`,
                content: componentContent(ComponentName)
            },
            {
                name: 'test-spec',
                filename: `__tests__/${answerComponentname}.spec.ts/`,
                content: testsContent(ComponentName)
            }
        ]

        Files.forEach(file => {
            fileSave(path.join(ComponentPath, file.filename)).write(file.content, 'utf8').end('\n')
        })

        /** add to components.json */
        // componentsFile[ComponentName] = `./src/components/${ComponentName}/index.ts`
        // fileSave(componentsFilePath).write(JSON.stringify(componentsFile, null, '  '), 'utf8').end('\n')

        console.log(chalk.bold.green(`Done! All ${ComponentName} component files and directories are ready.`))
    })
