const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { generate } = require("rxjs");
const { create } = require("domain");

var HTML = `<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Team Generator</title>

  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>
  <header class="hero">
    <h1 class="title is-1">Work Team Generator</h1>
  </header>

  <section class="hero-body columns is-12">` + "\n";
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
            let managerName = response.managerName;
            let id = response.id;
            let email = response.email;
            let officeNum = response.officeNum;
            let manager = new Manager(managerName, id, email, officeNum);
            let managerCard = ` <div class="box">
            <h2 class="title is-3">${manager.name}</h2>
            <h2 class="title is-4">${manager.role}</h2>
            <p>ID: ${manager.id}</p>
            <p>email: ${manager.email}</p>
            <p>Office Number: ${manager.officeNum}</p>
        </div>` + "\n";
        HTML = HTML + managerCard;
        keepGoing();
        })
        }
    keepGoing(){
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'Add another employee?',
                choices: ["Yes", "No"],
                name: 'keepGoing',
            }
        ]).then((response) => {
            var choices = response.choices;
            if (choices === "Yes"){
                this.anotherEmployee();
            }else {
                HTML = HTML + `</section>

                <script src="index.js"></script>
              </body>
              </html>`;

              fs.writeFile('team.html', HTML, (err) => {
                err ? console.error(err) : console.log('Success!');
              })
            }
        })
    }
    anotherEmployee() {
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which do you want to generate?',
                choices: ['Engineer', 'Intern'],
                name: 'type',
            },
            {
                type: 'input',
                message: 'What is their name?',
                name: 'name'
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
            }
        ]).then((response) => {
            var type = response.type;
            var name = response.name;
            var id = response.id;
            var email = response.email; 
            if (type === 'Engineer') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is their github username?',
                        name: 'github'
                    }
                ]).then((response) => {
                    var github = response.github;
                    let engineer = new Engineer(name, id, email, github);
                    let engineerCard = `<div class="box">
                    <h2 class="title is-3">${engineer.name}</h2>
                    <h2 class="title is-4">${engineer.role}</h2>
                    <p>ID: ${engineer.id}</p>
                    <p>email: ${engineer.email}</p>
                    <p>github: ${engineer.github}</p>
                </div>` + "\n";
                HTML = HTML + engineerCard;
                this.keepGoing();
                })
            }else {
                inquirer
                prompt([
                    {
                        type: 'input',
                        message: 'What school do they attend?',
                        name: 'school'
                    }
                ]).then((response) => {
                    var school = response.school;
                    let intern = new Intern(name, id, email, school);
                    let internCard = `<div class="box">
                    <h2 class="title is-3">${intern.name}</h2>
                    <h2 class="title is-4">${intern.role}</h2>
                    <p>ID: ${intern.id}</p>
                    <p>email: ${intern.email}</p>
                    <p>school: ${intern.school}</p>
                </div>` + "\n";
                HTML = HTML + internCard;
                    this.keepGoing;
                })
            }
        })
    }
}

module.exports = Generate;