const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

// Top half of HTML that we want to add each of our employee cards to.
var HTML = `<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Team Generator</title>

  <link rel="stylesheet" href="./dist/style.css">
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

    // generate manager
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
            let manager = new Manager(response.managerName, response.id, response.email, response.officeNum);
            let managerCard = ` <div class="box">
            <h2 class="title is-3">${manager.name}</h2>
            <h2 class="title is-4">${manager.role}</h2>
            <p>ID: ${manager.id}</p>
            <a href="mailto:"><p>email: ${manager.email}</p></a>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>` + "\n";
        // Add managerCard to Global HTML variable
        HTML = HTML + managerCard;
        this.keepGoing();
        })
    }
    //determine whether you want to keep generating employees
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
            var choices = response.keepGoing;
            if (choices === "Yes"){
                this.anotherEmployee();
            }else {
                // if they choose to end, the last section of the html is added and
                // it is written to a new html file
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
    //add an engineer or intern
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
                name: 'name',
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
            if (response.type === 'Engineer') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is their github username?',
                        name: 'github'
                    }
                ]).then((response2) => {
                    let engineer = new Engineer(response.name, response.id, response.email, response2.github);
                    let engineerCard = `<div class="box">
                    <h2 class="title is-3">${engineer.name}</h2>
                    <h2 class="title is-4">${engineer.role}</h2>
                    <p>ID: ${engineer.id}</p>
                    <a href="mailto:"><p>email: ${engineer.email}</p></a>
                    <a href="https://github.com/${engineer.github}" target="_blank">Github: ${engineer.github}</a>
                </div>` + "\n";
                // Add engineerCard to Global HTML variable
                HTML = HTML + engineerCard;
                this.keepGoing();
                })
            }else {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What school do they attend?',
                        name: 'school',
                    }
                ]).then((response3) => {
                    let intern = new Intern(response.name, response.id, response.email, response3.school);
                    let internCard = `<div class="box">
                    <h2 class="title is-3">${intern.name}</h2>
                    <h2 class="title is-4">${intern.role}</h2>
                    <p>ID: ${intern.id}</p>
                    <a href="mailto:"><p>email: ${intern.email}</p></a>
                    <p>school: ${intern.school}</p>
                </div>` + "\n";
                //Add internCard to global HTML
                HTML = HTML + internCard;
                    this.keepGoing();
                })
            }
        })
    }
    //starts the app
    go() {
        this.makeManager();
    }
}

module.exports = Generate;