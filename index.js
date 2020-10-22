
const fs = require("fs");
const inquirer = require('inquirer');

console.log('Hi, welcome to our fabulous README.md generator!');

var questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project called?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Where are your project about?"
    },
    {
        type: "input",
        name: "projectInstall",
        message: "How should this project be installed?"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "What usage information should be included?"
    },
    {
        type: "input",
        name: "projectTest",
        message: "How should the project be tested?"
    },
    {
        type: "input",
        name: "projectContribute",
        message: "How can others contribute to this project?"
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Which licences do you want to add?',
        choices: ['GNU', 'Apache Licence 2.0', 'BSD', 'MIT'],
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address for any queries."
    }
]

inquirer.prompt(questions).then((answers) => {
    const licenceBadge = generateBadge(answers);
    const licenceLink = generateLink(answers);
    const answersText = generateMD({ ...answers, licenceBadge, licenceLink });
    const readmeTitle = answers.projectTitle + '.md';
    console.log(answersText);

    fs.writeFile(readmeTitle, answersText, function (err) {
        if (err) {
            throw err;
        }
        console.log("Success!");
    })

    function generateBadge(answers) {
        if (answers.projectLicense == "GNU") {
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        }
        else if (answers.projectLicense == "Apache Licence 2.0") {
            return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
        }
        else if (answers.projectLicense == "BSD") {
            return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
        }
        else {
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        }
    }

    function generateLink(answers) {
        if (answers.projectLicense == "GNU") {
            return '<https://www.gnu.org/licenses/gpl-3.0>'
        }
        else if (answers.projectLicense == "Apache Licence 2.0") {
            return '<https://opensource.org/licenses/Apache-2.0>'
        }
        else if (answers.projectLicense == "BSD") {
            return '<https://opensource.org/licenses/BSD-3-Clause>'
        }
        else {
            return '<https://opensource.org/licenses/MIT>'
        }
    }

    function generateMD(answers) {
        return `
${licenceBadge}
## Table of contents:
1. [Description](##-description:)
2. [Installation instructions](##-installation-instructions:)
3. [Project Usage](##-project-usage:)
4. [Test instructions](##-test-instructions:)
5. [Contributions](##-contributions:) 
6. [Licences](##-licences:)
7. [Questions?](##-for-any-questions:)
## Description:
${answers.projectDescription}
## Installation instructions:
${answers.projectInstall}
## Project Usage:
${answers.projectUsage}
## Test instructions:
${answers.projectTest}
## Contributions:
${answers.projectContribute}
## Licences:
More information on the ${answers.projectLicense} licence can be found here: ${licenceLink}
## For any questions:
GitHub/${answers.GitHub} https://www.github.com/${answers.GitHub}<br>
email: ${answers.email}
`
    }
});