// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.name}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation] (#Installation)
  * [Usage] (#Usage)
  * [License] (#License)
  * [Contributor] (#Contributor)
  * [Tests] (#Tests)
  * [Questions] (#Questions)





  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ${answers.License}

  ## contribution
  ${answers.Contributor}

  ## Tests
  ${answers.Tests}

  ## Questions

  If you have any questions, you can reach me at ${answers.Questions}

  and/or

  https://github.com/${answers.GitHubName}

  ---
  ##### © 2021 WG.
  
  `;
}

module.exports = generateMarkdown;
