const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("../lib/Employee");
const manager = require("../lib/Manager");
const engineer = require("../lib/Engineer");
const intern = require("../lib/Intern");

function populateEmployeeQuestionnaire() {
    let data = [];

    inquirer.prompt(employeeQuestionsSet)
        .then((employeeAnswers) => {
            let emp = new employee.Employee(employeeAnswers.teamManagersName, employeeAnswers.employeeId, employeeAnswers.employeeEmail)
            let mgr = new manager.Manager(emp, employeeAnswers.EmployeeOfcNbr);
            data.push(mgr);

            // Showing Menu to the user
            const askQues = () => {
                inquirer.prompt(Menu).then((response) => {
                    if (response.nextStep == 1) {
                        inquirer.prompt(EngineerQues).then((engineerResp) => {
                            emp = new employee.Employee(engineerResp.engineerName, engineerResp.engineerID, engineerResp.engineerEmail);
                            let eng = new engineer.Engineer(emp, engineerResp.engineerGithub)
                            data.push(eng);

                            askQues();
                        })
                    } else if (response.nextStep == 2) {
                        inquirer.prompt(InternQues).then((internResp) => {
                            emp = new employee.Employee(internResp.internName, internResp.internID, internResp.internEmail);
                            let intrn = new intern.Intern(emp, internResp.internSchool);
                            data.push(intrn);

                            askQues();
                        })
                    } else if (response.nextStep == 3) {
                        // Generate the HTML
                        GenerateHtml(data);
                        return;
                    }
                });
            };
            askQues();
        });
}

function GenerateHtml(data) {

    var htmlHeadContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="./assets/style.css" /><title>Team Profile</title></head>';
    var htmlHeader = '<header><h1 class="text-center" align="center" id="myHead">My Team</h1></header>';
    var outerDiv = '<div id="inner" style="overflow: hidden; width: 2000px;">'

    var box = "";
    for (var i = 0; i < data.length; i++) {
        var detail = data[i];
        var text = '';
        if (detail.getRole() === 'Manager') {
            text = 'Office Number : ' + detail.getOffice();
        } else if (detail.getRole() === 'Engineer') {
            text = 'Github : ' + detail.getGithub()
        } else {
            text = 'School : ' + detail.getSchool();
        }
        var mailText = '<a href = "mailto:' + detail.getEmail() + '">' + detail.getEmail() + '</a>'

        box += '<div style="color:black; border-style: solid; border-width: 10px; width: 300px; height: 200px; text-align: center;"><h3>' + detail.getName() + '<br/>' + detail.getRole() +
            '</h3><div style="background-color: none;">ID : ' + detail.getId() + ' <br/> Email : ' + mailText + ' <br/> ' + text + '</div></div>'
    }

    var divClose = '</div>';

    var fullHtml = htmlHeadContent + htmlHeader + outerDiv + box + divClose + '</html>';

    fs.writeFile('./dist/team-profile-page.html', fullHtml, (error) => {});

}


const employeeQuestionsSet = [{
        type: "input",
        message: "Enter your team manager's name.",
        name: "teamManagersName"
    },
    {
        type: "input",
        message: "Enter your Employee Id.",
        name: "employeeId"
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "employeeEmail"
    },

    {
        type: "input",
        message: "Enter your Office Number",
        name: "EmployeeOfcNbr"
    }

];

const Menu = [{
    type: "list",
    message: "What do you want to do next. \n 1. Enter 1 to Add an Engineer \n 2. Enter 2 to Add an Intern \n 3. Enter 3 to Finish building my Team",
    name: "nextStep",
    choices: ["1", "2", "3"]
}];

const EngineerQues = [{
        type: "input",
        message: "Enter Engineer's name.",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Enter Engineer's Id.",
        name: "engineerID"
    },
    {
        type: "input",
        message: "Enter Engineer's email.",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Enter Engineer's Github username.",
        name: "engineerGithub"
    }

];

const InternQues = [{
        type: "input",
        message: "Enter Intern's name.",
        name: "internName"
    },
    {
        type: "input",
        message: "Enter Intern's ID.",
        name: "internID"
    },
    {
        type: "input",
        message: "Enter Intern's email.",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Enter Intern's School.",
        name: "internSchool"
    }
];



module.exports = populateEmployeeQuestionnaire;