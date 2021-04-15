var employee = require("./Employee")

class Manager extends employee.Employee {


    constructor(employee, officeNumber) {
        super(employee.name , employee.id , employee.email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports.Manager = Manager;