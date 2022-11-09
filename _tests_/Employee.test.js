const Employee = require("../lib/Employee");


test("can we set a name", () => {
    const name = "Bob";
    const emp = new Employee(name) //email, 12)
    expect(emp.name).toBe('Bob')
});

test("can we get an ID", () => {
    const id = "12";
    const emp = new Employee(id) 
    expect(emp.id).toBe('12')
});

test("can we set an email", () => {
    const email = "derek@gmail.com";
    const emp = new Employee(email) 
    expect(emp.email).toBe('derek@gmail.com')
});

//test id/emails similar

