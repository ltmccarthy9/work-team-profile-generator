const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe("Intern class", () => {
    it("Creates an Intern object with a school", () => {
        const Liam = new Intern("Liam", 19, "Liam@gmail.com", "Wisconsin");
        expect([Liam.name, Liam.id, Liam.email, Liam.school]).toEqual(["Liam", 19, "Liam@gmail.com", "Wisconsin"]);
    });
});

describe("getSchool", () => {
    it("Returns the school of the Intern object", () => {
        const Ana = new Intern("Ana", 5, "Ana@gmail.com", "NYU");
        expect(Ana.getSchool()).toEqual("NYU");
    });
});

