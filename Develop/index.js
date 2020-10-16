const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const MarkdownIt = require('markdown-it'),

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

function promptUser() {
    return inquirer.prompt([
        // const questions = [
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
    );
};
// function to write README file

inquirer.prompt(questions).then(Response => {

    fs.appendFileSync("README2.md", ("# " + Response.projectTitle) + '\n', function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Success!");
    })
})
function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div>
    <p>${answers.projectTitle}</p>
    <p>${answers.projectDescription}</p>
    <p>${answers.projectInstall}</p>
    <p>${answers.projectUsage}</p>
    <p>${answers.projectTest}</p>
    <p>${answers.projectLicense}</p>
    <p>${answers.GitHub}</p>
    <p>${answers.email}</p>
  </div>
  </body>
  </html>`;
}

// function to initialize program
async function init() {
    console.log("hi")
    try {
        const answers = await promptUser();

        const projectData = generateHTML(answers);

        await writeFileAsync("README2.html", projectData);

        console.log("Successfully wrote to index.html");
    } catch (err) {
        console.log(err);
    }
}
// function call to initialize program
init();

md = new MarkdownIt();
let result = md.render('# markdown-it rulezz!');