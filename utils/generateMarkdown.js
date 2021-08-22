// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return ''
  }
  else if (license === 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  }
  else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } 
  else if (license === 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
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
    return 'This is a license for software packages with the intent of giving the original copyright holder some measure of control over his software while still remaining open source. It is flexible and allows you to distribute or sell modified versions as long as you maintain access to the original version and publish modifications.'
  }
  else if (license === 'Mozilla') {
    return "The MPL is a simple copyleft license. The MPL's 'file-level' copyleft is designed to encourage contributors to share modifications they make to your code, while still allowing them to combine your code with code under other licenses (open or proprietary) with minimal restrictions."
  }
  else if (license === 'MIT') {
    return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  }
  else if (license === 'IBM') {
    return 'The IBM Public License (IPL) is a free open-source software license written and occasionally used by IBM. It is approved by the Free Software Foundation (FSF) and described as an "open-source license" by the Open Source Initiative.'
  } else if (license === 'Zlib') {
    return 'The zlib license is a permissive free software license which defines the terms under which the zlib software library can be distributed. ... The zlib license has been approved by the Free Software Foundation (FSF) as a free software license, and by the Open Source Initiative (OSI) as an open source license.'
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
  * [Contribution](#contribution)
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

  If you would like to contribute to this project, please contact via e-mail: ${answers.contribution}

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
