// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return ''
  }
  else if (license === 'Perl') {
    return 'https://opensource.org/licenses/Artistic-2.0'
  }
  else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  } else if (license === 'Zlib') {
    return 'https://opensource.org/licenses/Zlib'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return ''
  }
  else if (license === 'Perl') {
    return 'https://opensource.org/licenses/Artistic-2.0'
  }
  else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  } else if (license === 'Zlib') {
    return 'https://opensource.org/licenses/Zlib'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return ''
  }
  else if (license === 'Perl') {
    return 'https://opensource.org/licenses/Artistic-2.0'
  }
  else if (license === 'Mozilla') {
    return "The MPL is a simple copyleft license. The MPL's 'file-level' copyleft is designed to encourage contributors to share modifications they make to your code, while still allowing them to combine your code with code under other licenses (open or proprietary) with minimal restrictions."
  }
  else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  } else if (license === 'Zlib') {
    return 'https://opensource.org/licenses/Zlib'
  }

}




// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.name}  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributor](#contributor)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${renderLicenseSection(answers.license)} 
  
  for more information, visit: ${renderLicenseLink(answers.license)}

  ## contribution
  ${answers.contributor}

  ## Tests
  ${answers.tests}

  ## Questions

  If you have any questions, you can reach me via:
  email: ${answers.questions}

  and/or

  GitHub: https://github.com/${answers.GitHubName}

  ---
  ##### © 2021 WG.
  
  `;
}

module.exports = generateMarkdown;
