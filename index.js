const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./team/Manager");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
const EmployeeArray = []
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
        .then((answers) => {
            const manager =  new Manager(answers.name, answers.id, answers.email, answers.officeNum)
            EmployeeArray.push(manager)
            firstQuestions()
        })

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
        .then((answers) => {
            const engineer =  new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            EmployeeArray.push(engineer)
            firstQuestions()
        })
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
    .then((answers) => {
        const intern =  new Intern(answers.name, answers.id, answers.email, answers.school)
        EmployeeArray.push(engineer)
        firstQuestions()
    })
};
const firstQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'emplRole',
            message: "What is the employees role?",
            choices: ["Manager", "Engineer", "Intern", "I'm Done"]
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
        else if (answers.emplRole === "I'm Done"){

        }

    }
    )
}
firstQuestions()



