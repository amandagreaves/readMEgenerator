const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Give a descritption of your project.",
        },

])
}
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