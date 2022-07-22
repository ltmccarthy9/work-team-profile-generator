const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe("Manager class", () => {
    it("Returns a manager object with office number", () => {
        const Stan = new Manager("Stan", 57, "Stan@gmail.com", 14121);

        expect([Stan.name, Stan.id, Stan.email, Stan.officeNumber]).toEqual(["Stan", 57, "Stan@gmail.com", 14121]);
    })
})

describe("getOfficeNum", () => {
    it("Returns the office number of this object", () => {
        const Daniel = new Manager("Daniel", 11, "Daniel@gmail.com", 114);

        expect(Daniel.getOfficeNum()).toEqual(114);
    })
})
