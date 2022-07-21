const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { generate } = require("rxjs");
const { create } = require("domain");

var HTML = "";
class Generate {
    constructor() {
        this.managers = 0;
        this.employees = 0;
    }

    go() {
        makeManager();
    }

    makeManager() {
        console.log("Add your manager");
        inquirer.prompt([
        {
            type: 'input',
            message: 'What is their name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'officeNum',
        }]).then((response) => {
            var managerName = response.managerName;
            var id = response.id;
            var email = response.email;
            var officeNum = response.officeNum;
            var manager = new Manager(managerName, id, email, officeNum);
            var managerCard = ` <div class="box">
            <h2 class="title is-3">${manager.name}</h2>
            <h2 class="title is-4">${manager.role}</h2>
            <p>ID: ${manager.id}</p>
            <p>email: ${manager.email}</p>
            <p>Office Number: ${manager.officeNum}</p>
        </div>` + "\n";
        HTML = HTML + managerCard;
        anotherEmployee();
        })
        }
}

module.exports = Generate;