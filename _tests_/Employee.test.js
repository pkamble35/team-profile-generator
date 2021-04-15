const employee = require("../lib/Employee");

test('Test Employee Role',() => {
    let emp = new employee.Employee('Emp', 'EmpID', 'EmpEmail')
    expect(emp.getRole()).toBe('Employee');
});

test('Test Employee Name',() => {
    let emp = new employee.Employee('Emp', 'EmpID', 'EmpEmail')
    expect(emp.getName()).toBe('Emp');
});

test('Test Employee ID',() => {
    let emp = new employee.Employee('Emp', 'EmpID', 'EmpEmail')
    expect(emp.getId()).toBe('EmpID');
});

test('Test Employee Email',() => {
    let emp = new employee.Employee('Emp', 'EmpID', 'EmpEmail')
    expect(emp.getEmail()).toBe('EmpEmail');
});
