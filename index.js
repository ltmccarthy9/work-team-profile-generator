const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


inquirer
.prompt([
  {
    type: 'list',
    message: 'Pick a license:',
    choices: ['MIT', 'Apache license 2.0', 'GPLv3'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'p_title',
  },