const inquirer = require('inquirer')

inquirer
  .prompt([
    {
        type: 'list',
        message: 'Select Component Type',
        name: 'type',
        choices: [
            'Options API','Composition API'
        ],
        filter: function (val) {
            return val.replace(/\s/g, '_').toLowerCase();
          },
        validate: function (answer) {
            if (answer.length < 1) {
              return 'You must choose at least one topping.';
            }
    
            return true;
          },
    },
    {
        type: 'input',
        message: 'Component name',
        name: 'name'
    },
    {
        type: 'list',
        message: 'Script language',
        name: 'language',
        choices: ['javascript', 'typescript']
    },
    {
        type: 'list',
        message: 'Create parent directory',
        name: 'directory',
        choices: ['yes', 'no']
    },
    {
        type: 'list',
        message: 'Create tests',
        name: 'tests',
        choices: ['yes', 'no']
    }
  ],
  )
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });