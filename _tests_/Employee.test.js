const Employee = require("../lib/Employee");

test("can initiate Employee instance", () => {
    const emp = new Employee()
    expect('the name'(emp)).toBe("object");
});

test("can we set a name", () => {
    const name = "Bob";
    const emp = new Employee(name)
    expect(emp.name).toBe('Bob')
});

//test id/emails similar

