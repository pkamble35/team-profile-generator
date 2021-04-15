const employee = require("../lib/Employee");
const intern = require("../lib/Intern");

test('Test Employee Role',() => {
    let emp = new employee.Employee('Intern Name', 'IntrID', 'IntrEmail')
    let intrn = new intern.Intern(emp, 'Intrn School');
    expect(intrn.getRole()).toBe('Intern');
});

test('Test Intern Name',() => {
    let emp = new employee.Employee('Intern Name', 'IntrID', 'IntrEmail')
    let intrn = new intern.Intern(emp, 'Intrn School');
    expect(intrn.getName()).toBe('Intern Name');
});

test('Test Intern ID',() => {
    let emp = new employee.Employee('Intern Name', 'IntrID', 'IntrEmail')
    let intrn = new intern.Intern(emp, 'Intrn School');
    expect(intrn.getId()).toBe('IntrID');
});

test('Test Intern Email',() => {
    let emp = new employee.Employee('Intern Name', 'IntrID', 'IntrEmail')
    let intrn = new intern.Intern(emp, 'Intrn School');
    expect(intrn.getEmail()).toBe('IntrEmail');
});

test('Test Intern School ',() => {
    let emp = new employee.Employee('Intern Name', 'IntrID', 'IntrEmail')
    let intrn = new intern.Intern(emp, 'Intrn School');
    expect(intrn.getSchool()).toBe('Intrn School');
});