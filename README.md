# Work Team Profile Generator

## Description
Work Team Profile Generator is a command line node.js application that takes in user input
regarding different team members and generates a web page holding the unique data for each 
team member.  Each employee has a name, id, and email.  There can only be one manager position,
which has a unique value of Office Number.  The other two employee types, which can be added in any number
are Enginner and Intern.  Engineer has a github username which links to their profile, while the intern
has a line displaying which school they attend.  

## Technologies Used
* Javascript
* HTML5
* Gitbash
* Git
* CSS
* Bulma
* Inquirer
* Jest

## Uses
This application is used for generating information cards regarding a work-team.  Cards contain
information regarding the employee's name, id, email, role, and other unique identifiers depending
on their role.

## Video Demonstration

https://drive.google.com/file/d/1bbbYM_LPdr5FUK0HeNCBdjA--4ybWhhQ/view  < ---- 

## Installation
To use this application, either clone this repository or copy it into your own pc.  You will have to 
run an "npm install" in your terminal in order to install inquirer and jest.  From there, make sure you're
in the correct file location and run "node index.js".  When you click "no" when prompted to generate more
employees, a "team.html" file will be generated in your directory.

## Code 

```Javascript
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
```
After the user inputs responses to the prompt, we take that information, create a manager object,
then fill out a template literal card that includes the given information.

```Javascript
if (response.type === 'Engineer') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is their github username?',
                        name: 'github'
                    }
                ]).then((response2) => {
```
In this case, we must determine what final question to ask based on the role that is selected.
If Engineer is selected, then we ask an additional question asking for their github username, which is 
then all added to a card the same way we did for the manager shown above.


## Contact

Email: ltmccarthy9@gmail.com


## License

MIT License

Copyright (c) 2022 Liam McCarthy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.