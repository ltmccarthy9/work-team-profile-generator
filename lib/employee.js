class Employee {
    constructor(name, id, email){
        this.role = "Employee";
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}

const emp = new Employee("Liam", 1412, "ltmccarthy9@gmail.com");
console.log(emp.getRole());
module.exports = Employee;