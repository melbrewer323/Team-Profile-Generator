const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./team/Manager");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
/* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/
const managerQuestions = () => {
    inquirer 
    .prompt([ 
        {
            type: "input",
            name: 'name',
            message: "What is your name?"
        },
        {
            type: 'input',
            name: 'email',
                message: "What is your Email?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your employee Id?",
            },  
            {
                type: 'input',
                name: 'officeNum',
                message: "What is the Manager's office number?",
            },  
            
        ])
        
    };
    const engineerQuestions = () => {
        inquirer 
        .prompt([ 
            {
                type: "input",
                name: 'name',
                message: "What is your name?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Email?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your employee Id?",
            },  
            {
                type: 'input',
                name: 'gitHub',
                message: "What is your GitHub User Name?",
            },  
            
        ])
        
    };
    const internQuestions = () => {
        inquirer 
        .prompt([ 
            {
            type: "input",
            name: 'name',
            message: "What is your name?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Email?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee Id?",
        },  
        {
            type: 'input',
            name: 'school',
            message: "What school do you attend?",
        },  

    ])

};
const firstQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'emplRole',
            message: "What is the employees role?",
            choices: ["Manager", "Engineer", "Intern"]
        }, 

    ])
    .then((answers) => {
        if (answers.emplRole  === "Manager"){
            managerQuestions()
        }
        else if (answers.emplRole === "Engineer"){
            engineerQuestions()
        }
        else if (answers.emplRole === "Intern"){
            internQuestions()
        }

    }
    )
}
firstQuestions()



