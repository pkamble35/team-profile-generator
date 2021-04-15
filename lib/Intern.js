var employee = require("./Employee")

class Intern extends employee.Employee {


    constructor(employee, school) {
        super(employee.name , employee.id , employee.email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }


    getRole() {
        return 'Intern';
    }

}

module.exports.Intern = Intern;