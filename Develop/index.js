const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
//const util = require("util");
//const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
    {
        type: "input",
        name: "title",
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
        message: "What license did you use? select from the list below.",
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
    ])



.then(function (answers) {
    const input = generateMarkdown(answers);
    writeToFile("README.md", input);
})
//.then(function () {
    //console.log("Successfully wrote to index.html");
//})
//.catch(function (err) {
  //  console.log(err);
//});

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    });
}
// array of questions for user
//const questions = [
    
// function to write README file

//return writeFileAsync("index.html", html);
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