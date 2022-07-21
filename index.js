const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { generate } = require("rxjs");
const { create } = require("domain");

const Generate = require('./lib/generate');
var managers = 0;


const go = new Generate;

go.go();

