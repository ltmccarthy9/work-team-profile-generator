const Employee = require('../lib/employee');

describe("Employee class", () => {
    it("Creates an employee object", () => {
        const bob = new Employee("bob", 14, "bob@gmail.com");
        expect([bob.name, bob.id, bob.email]).toEqual(["bob", 14, "bob@gmail.com"]);
    });
});

describe("getName", () => {
    it("Returns the name of this object", () => {
        const mike = new Employee("Mike", 11, "Mike@gmail.com");

        expect(mike.getName()).toEqual("Mike");
    })
})

describe("getId", () => {
    it("Returns the id of this object", () => {
        const Dan = new Employee("Dan", 15, "Dan@gmail.com");

        expect(Dan.getId()).toEqual(15);
    })
})

describe("getEmail", () => {
    it("Returns the email address of this object", () => {
        const Matt = new Employee("Matt", 12, "Matt@gmail.com");

        expect(Matt.getEmail()).toEqual("Matt@gmail.com");
    })
})

describe("getRole", () => {
    it("Returns the job role of this object", () => {
        const sarah = new Employee("Sarah", 21, "Sarah@gmail.com");

        expect(sarah.getRole()).toEqual("Employee");
    })
})