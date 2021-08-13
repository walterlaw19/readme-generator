// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// const questions = [        
inquirer.prompt ([
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
        message: 'Would you like to add a Table of Contents?',
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
        name: 'Contributing',
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
        message: 'Please add any questions in regards to your project',
    }
]).then((answers) => {
    console.log(answers)

    const desiredOutput = generateMarkdown(answers);

    console.log(desiredOutput)
});

// const fileName = ()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile()
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

// writeToFile('./Readme.md',  )






















// function displayWord(word) {
//     console.log(word)
//   }
  
//   displayWord('Hi!') // ---> Hi!
  
//   const displayWord = (word) => {
//     console.log(word)
//   }