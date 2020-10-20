
const fs = require("fs");
const axios = require("axios");
const inquirer = require('inquirer');

console.log('Hi, welcome to todays fucking homework');

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
        message: "What usage information should be inclued?"
    },
    {
        type: "input",
        name: "projectTest",
        message: "How should the project be tested?"
    },
    {
        type: "input",
        name: "projectLicense",
        message: "Which licences do you want to add?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    }
]
inquirer.prompt(questions).then((answers) => {
    const answersJSON = JSON.stringify(answers, null, '#  ')
    console.log(answersJSON);

    fs.writeFile("README2.md", answersJSON, function (err) {
        if (err) {
            throw err;
        }
        console.log("Success!");
    })
});

// function generateMD(answers) {
//     return `
//     ${answers.projectTitle}
//     ${answers.projectDescription}
//     ${answers.projectInstall}
//     ${answers.projectUsage}
//     ${answers.projectTest}
//     ${answers.projectLicense}
//     ${answers.GitHub}
//     ${answers.email}`
// }

// init();


//     fs.writeFile("README2.md", (("# " + answers.projectTitle) + '\n', ("## " + answers.projectDescription) + '\n', ("# " + answers.projectInstall) + '\n', ("## " + answers.projectUsage) + '\n', ("## " + answers.projectTest) + '\n', ("## " + answers.projectLicence) + '\n', ("## " + answers.projectGitHub) + '\n', ("## " + answers.projectEmail) + '\n'), function (err) {
