const inquirer = require('inquirer');
const fs = require('fs');
/* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/
const manager = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the Manager's name?",
      }, 
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the Manager's Id?",
    },   
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the Manager's Email?",
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: "What is the Manager's office number?",
    }, 
    {
        type: 'list',
        name: 'addEmpl',
        message: "Do you want to add an employee?",
        choices: ["yes", "no"]
    }, 
    {
        type: 'list',
        name: 'addEmpl',
        message: "Do you want to add an employee?",
        choices: ["yes", "no"]
    }, 
    {
        type: 'list',
        name: 'emplRole',
        message: "What is the employees role?",
        choices: ["Engineer", "Intern"]
    }, 
];

