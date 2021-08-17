// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// const questions = [        
inquirer.prompt ([
    {
        type: 'input',
        name: 'GitHubName',
        message: 'What is the name of your GitHub?',
    },
    {
        type: 'input',
        name: 'GitHubRepo',
        message: 'what is the name of your GitHub Repository?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is your project title?',
        validate: projectNameInput => {
            if (projectNameInput) {
              return true;
            } else {
              console.log('Please enter the name of your project title!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'please add a description for your GitHub',
        validate: projectDescInput => {
            if (projectDescInput) {
              return true;
            } else {
              console.log('Please enter a description for your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'TableofContents',
        message: 'Please add a Table of Contents',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide a step-by-step description to install your project',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project',
        choices: ['license1', 'license2', 'license3', 'license4', 'license5']
    },
    {
        type: 'input',
        name: 'Contributor',
        message: 'List your collaborators',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for your application and provide examples on how to run them.',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your e-mail address',
    }
]).then((answers) => {
    console.log(answers)

    const desiredOutput = generateMarkdown(answers);

    console.log(desiredOutput)


});

// const fileName = ()
// const filename = data.name.toLowerCase().split(" ").join("") + ".json";

// TODO: Create a function to write README file // writeToFile('./Readme.md',  )



function writeToFile () {
    fs.writeFile('./utils/READme.md', desiredOutput, err => {
        if (err) {
            return console.log(err);
            
        }

        console.log("Success! RD is done")
        console.log(desiredOutput);
    });
}


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// function writeToFile() {
//     fs.writeFile('./dist/READme.md', desiredOutput)
// }

// TODO: Create a function to initialize app
function init() {
    
    // writeToFile();
    
}
init();


// inquirer.prompt();
// Function call to initialize app

















// function displayWord(word) {
//     console.log(word)
//   }
  
//   displayWord('Hi!') // ---> Hi!
  
//   const displayWord = (word) => {
//     console.log(word)
//   }