const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project/app',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and examples on how to run them',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter guidelines for others to contribute to your project',
    },
    
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators (gitHub profile links) and any resources or assets that need attributtion',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'GPLv2', 'LGPLv2.1', 'BSD 3-Clause', 'BSD 2-Clause', 'ISC', 'Unlicense'],
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
