const employee = require("../lib/Employee");
const engineer = require("../lib/Engineer");

test('Test Engineer Role',() => {
    let emp = new employee.Employee('Engineer Name', 'EngrID', 'EngrEmail')
    let engr = new engineer.Engineer(emp, 'Engr Github');
    expect(engr.getRole()).toBe('Engineer');
});

test('Test Engineer Name',() => {
    let emp = new employee.Employee('Engineer Name', 'EngrID', 'EngrEmail')
    let engr = new engineer.Engineer(emp, 'Engr Github');
    expect(engr.getName()).toBe('Engineer Name');
});

test('Test Engineer ID',() => {
    let emp = new employee.Employee('Engineer Name', 'EngrID', 'EngrEmail')
    let engr = new engineer.Engineer(emp, 'Engr Github');
    expect(engr.getId()).toBe('EngrID');
});

test('Test Engineer Email',() => {
    let emp = new employee.Employee('Engineer Name', 'EngrID', 'EngrEmail')
    let engr = new engineer.Engineer(emp, 'Engr Github');
    expect(engr.getEmail()).toBe('EngrEmail');
});

test('Test Engineer Github',() => {
    let emp = new employee.Employee('Engineer Name', 'EngrID', 'EngrEmail')
    let engr = new engineer.Engineer(emp, 'Engr Github');
    expect(engr.getGithub()).toBe('Engr Github');
});