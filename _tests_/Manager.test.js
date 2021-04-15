const employee = require("../lib/Employee");
const manager = require("../lib/Manager");

test('Test Manager Role',() => {
    let emp = new employee.Employee('Manager Name', 'MgrID', 'MgrEmail')
    let mgr = new manager.Manager(emp, '1234');
    expect(mgr.getRole()).toBe('Manager');
});

test('Test Manager Name',() => {
    let emp = new employee.Employee('Manager Name', 'MgrID', 'MgrEmail')
    let mgr = new manager.Manager(emp, '1234');
    expect(mgr.getName()).toBe('Manager Name');
});

test('Test Manager ID',() => {
    let emp = new employee.Employee('Manager Name', 'MgrID', 'MgrEmail')
    let mgr = new manager.Manager(emp, '1234');
    expect(mgr.getId()).toBe('MgrID');
});

test('Test Manager Email',() => {
    let emp = new employee.Employee('Manager Name', 'MgrID', 'MgrEmail')
    let mgr = new manager.Manager(emp, '1234');
    expect(mgr.getEmail()).toBe('MgrEmail');
});

test('Test Manager Office',() => {
    let emp = new employee.Employee('Manager Name', 'MgrID', 'MgrEmail')
    let mgr = new manager.Manager(emp, '1234');
    expect(mgr.getOffice()).toBe('1234');
});