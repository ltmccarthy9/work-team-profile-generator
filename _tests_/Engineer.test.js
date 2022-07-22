const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    it("Creates an Engineer object with a github username", () => {
        const bobby = new Engineer("bobby", 14, "bobby@gmail.com", "bobby9");
        expect([bobby.name, bobby.id, bobby.email, bobby.github]).toEqual(["bobby", 14, "bobby@gmail.com", "bobby9"]);
    });
});

describe("getGithub", () => {
    it("Returns the github username of this object", () => {
        const Michael = new Engineer("Michael", 11, "Michael@gmail.com", "Michael81");

        expect(Michael.getGithub()).toEqual("Michael81");
    })
})

