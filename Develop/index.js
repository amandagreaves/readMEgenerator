const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "table of conents",
        message: "What is included in your table of contents?",
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: [
            "Apache License 2.0",
            "BSD 3-Clause (New or Revised) license",
            "BSD 2-Clause (Simplified or FreeBSD) license",
            "GNU (General Public License GPL)",
            "GNU Library or (Lesser General Public License LGPL)",
            "MIT license",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License",
            "Eclipse Public License version 2.0"
        ]
    },
    {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL.",
    },
    ]);
}
function generateHTML(answers) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>README.md</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Hi! My name is ${answers.name}</h1>
        <p class="lead">I am from ${answers.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${answers.github}</li>
            <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
        </ul>
    </div>
</div>
</body>
</html>`;
}

promptUser()
    .then(function (answers) {
    const html = generateHTML(answers);
    return writeFileAsync("index.html", html);
    })
    .then(function () {
    console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
    console.log(err);
    });
// array of questions for user
//const questions = [

// function to write README file
//function writeToFile(fileName, data) {

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();

//* Title
//* Description
//* Table of Contents
//* Installation
//* Usage
//* License
//* Contributing
//* Tests
//* Questions