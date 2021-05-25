const fs = require('fs-extra')
const path = require('path')
const fileSave = require('file-save')
const inquirer = require('inquirer')
const AppsPath = path.join(__dirname, '../src/apps')
const directoryNames = fs.readdirSync(AppsPath)
const appRoutesContent = require('../build/app-routes-content')

inquirer.prompt([
  {
    type: 'list',
    message: 'Select App',
    name: 'appName',
    choices: directoryNames
  }
])
  .then(appNameAnswer => {
    const { appName } = appNameAnswer
    // console.log('directory: ', appNameAnswer.appName)
    const componentNames = fs.readdirSync(path.join(AppsPath, appName), {withFileTypes: true}).filter(c => c.isFile())
    inquirer.prompt([
      {
        type: 'confirm',
        message: 'Main nav',
        name: 'mainNav',
        default: false
      },
      {
        type: 'confirm',
        message: 'Route default?',
        name: 'routeDefault',
        default: false
      },
      {
        type: 'list',
        message: 'Select default component',
        name: 'defaultComponent',
        choices: componentNames
      },
      {
        type: 'input',
        message: 'Route path',
        name: 'appRoutePath',
        default: appName
      },
      {
        type: 'input',
        message: 'Body classes (comma separated list)',
        name: 'bodyClasses',
        default: appName
      },
      {
        type: 'input',
        message: 'Page Head',
        name: 'pageHead',
        default: appName.replace(/-/g, ' ')
      },
      {
        type: 'input',
        message: 'Title',
        name: 'title',
        default: appNameAnswer.appName.replace(/-/g, ' ')
      },
      {
        type: 'input',
        message: 'Redirect path (if needed)',
        name: 'redirectPath'
      }
    ])
      .then(answers => {
        const { appRoutePath, bodyClasses, defaultComponent, mainNav, pageHead, redirectPath, routeDefault, title } = answers
        console.log('answers: ', {...answers})
        const routeContent = appRoutesContent(appName, appRoutePath, bodyClasses, defaultComponent, mainNav, pageHead, routeDefault, title, redirectPath)
        // console.log('routeContent: ', routeContent)
        fileSave(path.join(AppsPath, `${appName}/routes.js`)).write(routeContent, 'utf8').end('\n')
      })
  })

