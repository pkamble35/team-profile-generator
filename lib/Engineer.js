var employee = require("./Employee")

class Engineer extends employee.Employee {
    constructor(employee, github) {
        super(employee.name , employee.id , employee.email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports.Engineer = Engineer;