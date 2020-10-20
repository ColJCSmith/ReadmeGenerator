const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const MarkdownIt = require('markdown-it');
md = new MarkdownIt();

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

console.log(res);

//     inquirer.prompt(res).then(Response => {

//     fs.writeFile("README3.md",
//         ("# " + Response.projectTitle) + '\n',
//         ("## " + Response.projectDescription) + '\n',
//         ("## " + Response.projectInstall) + '\n',
//         ("## " + Response.projectUsage) + '\n',
//         ("## " + Response.projectTest) + '\n',
//         ("## " + Response.projectLicense) + '\n',
//         ("## " + Response.GitHub) + '\n',
//         ("# " + Response.email) + '\n', function (err) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log("Success!");
//         })
// })

// function generateMD(res) {
//     return `
//     ("# " + Response.projectTitle) + '\n',
//     ("## " + Response.projectDescription) + '\n',
//     ("## " + Response.projectInstall) + '\n',
//     ("## " + Response.projectUsage) + '\n',
//     ("## " + Response.projectTest) + '\n',
//     ("## " + Response.projectLicense) + '\n',
//     ("## " + Response.GitHub) + '\n',
//     ("# " + Response.email) + '\n',`;
// }

    //     .then(function ({ username }) {
    //     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    //     axios.get(queryUrl).then(function (res) {
    //         const repoNames = res.data.map(function (repo) {
    //             return repo.name;
    //         });

    //         const repoNamesStr = repoNames.join("\n");
    //         var repoNamesStr1 = md.render('# markdown-it rulezz!');

    //         fs.writeFile("repos.md", repoNamesStr1, function (err) {
    //             if (err) {
    //                 throw err;
    //             }

    //             console.log(`Saved ${repoNames.length} repos`);
    //         });
    //     });
    // });
