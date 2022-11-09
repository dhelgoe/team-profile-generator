const Intern = require("../lib/Intern");

test("can we get a school back", () => {
    const school = "MSUM";
    const emp = new Intern(school) 
    expect(emp.school).toBe('MSUM')
});