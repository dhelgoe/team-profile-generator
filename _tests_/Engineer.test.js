const Engineer = require("../lib/Engineer");

test("can we get a Github Username", () => {
    const Github = "derek19";
    const emp = new Engineer(Github) 
    expect(emp.Github).toBe('derek19')
});