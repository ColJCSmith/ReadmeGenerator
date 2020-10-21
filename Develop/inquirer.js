
const fs = require("fs");
const axios = require("axios");
const inquirer = require('inquirer');

console.log('Hi, welcome to todays homework');

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
    const answersText = generateMD(answers);
    const readmeTitle = answers.projectTitle + '.md';
    console.log(answersText);

    fs.writeFile(readmeTitle, answersText, function (err) {
        if (err) {
            throw err;
        }
        console.log("Success!");
    })
});

function generateMD(answers) {
    return `
# Description:
${answers.projectDescription}
# Installation instructions:
${answers.projectInstall}
# Project Usage:
${answers.projectUsage}
# Test instructions:
${answers.projectTest}
# Licences:
${answers.projectLicense}
# Questions:
${answers.GitHub}
[${answers.email}](mailto:${answers.email})`
}
