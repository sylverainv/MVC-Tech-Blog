// Dependencies 
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/template.js");

//empty array that can store the team members in
const teamArray = [];

// questions for different teams members:

const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager of this team, or your name if you are the manager of this team. '
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number, enter your ID number if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email adress, enter your email adress if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number? if you are the manager of this team, enter your office number'
    },
]

const engineerQuestions = [

    {
        type: 'input',
        name: 'engiName',
        message: 'Enter the name of this engineer'
    },

    {
        type: 'input',
        name: 'engiID',
        message: 'Enter the ID number for this engineer'
    },

    {
        type: 'input',
        name: 'engiEmail',
        message: 'Enter the email adress for this engineer'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this engineers GitHub user name'
    },
]

const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of this intern'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Enter the ID number for this intern',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email adress for this intern'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school does this interen attend, if this intern is not currently attending a school enter "N/A" ',
    },
]

//this question will promt the user if they want to add another employee

const anotherOne = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the type of team member you would like to add next, if you are done select "Done" to generate your team ',
        choices: ['Engineer', 'Intern', 'Done']
    }
]