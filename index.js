// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'GitHubName',
            message: 'What is your GitHub username?',
            validate: projectGitHubNameInput => {
                if (projectGitHubNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
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
            name: 'installation',
            message: 'Provide a step-by-step description to install your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project',
            choices: ['Perl', 'Mozilla', 'MIT', 'IBM', 'Zlib']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contact email to contribute',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application and provide examples on how to run them.',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your e-mail address',
        }
    ]).then((answers) => {
        console.log(answers)

        const desiredOutput = generateMarkdown(answers);

        writeToFile('./dist/READme.md', desiredOutput)

    });



    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);

            }

            console.log("Success! RD is done")

        });
    }

}

init();


