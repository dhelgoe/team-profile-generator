const Manager = require("../lib/Manager");

test("can we get the Managers Office Number", () => {
    const Officenumber = "7632476987";
    const emp = new Manager(Officenumber) 
    expect(emp.Officenumber).toBe('7632476987')
});