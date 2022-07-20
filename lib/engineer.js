const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email,);
        this.github = github;
        this.role = "Engineer";
    }

    getGethub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}