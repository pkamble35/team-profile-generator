const populateQuestionnaire = require("./src/questionnaire.js");
const inquirer = require("inquirer");


function init() {
    populateQuestionnaire();
}

// Initialize the program
init();