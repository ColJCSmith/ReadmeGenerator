const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const MarkdownIt = require('markdown-it'),

// var MarkdownIt = require('markdown-it'),
//     md = new MarkdownIt();
// var result = md.render('# markdown-it rulezz!');

const writeFileAsync = util.promisify(fs.writeFile);


// function tocHtml() {
//     if (tocHtml_) return tocHtml_;
//     const MarkdownIt = require('markdown-it');
//     const markdownIt = new MarkdownIt();
//     let md = tocMd();
//     md = md.replace(/# Table of contents/, '');
//     md = replaceGitHubByJoplinAppLinks(md);
//     tocHtml_ = markdownIt.render(md);
//     tocHtml_ = `<div id="toc">${tocHtml_}</div>`;
//     return tocHtml_;
// }


function promptUser() {
    return inquirer.prompt([
        // const questions = [
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project called?"
        }]
    )
}

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