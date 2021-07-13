const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./team/Manager");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
const managerArray = []
const engineerArray = []
const internArray = []
/* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/
const generateTopHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css" />
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4 text-center">My Team</h1>
                </div>
              </div>
        </header>
        <main class="container">
        <div class="row col-12 d-flex justify-content-between">`
};

const generateEndHtml = () => {
    return `</div>
 
    </main>
    <script src=“https://code.jquery.com/jquery-3.3.1.slim.min.js” integrity=“sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo” crossorigin=“anonymous”></script>
        <script src=“https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js” integrity=“sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1” crossorigin=“anonymous”></script>
        <script src=“https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js” integrity=“sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM” crossorigin=“anonymous”></script>
   </body>
</html>`
};


const generateManagerCard = (answers) => {
   return `<div class="card" style="width: 18rem;">
    <div class="card-body ">
        <h5 class="card-title">${answers.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${answers.id}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
            <li class="list-group-item">Office Number: ${answers.officeNum}</li>
    </div>
</div>`
};

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
            const addManager =  new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            managerArray.push(addManager);
            console.log(managerArray);   

            firstQuestions()

        })

    };
    const generateEngineerCard = (answers) => {
        return `<div class="card" style="width: 18rem;">
         <div class="card-body ">
             <h5 class="card-title">${answers.name}</h5>
             <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Id: ${answers.id}</li>
                 <li class="list-group-item">Email: ${answers.email}</li>
                 <li class="list-group-item">GitHub: ${answers.gitHudb}</li>
         </div>
     </div>`
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
            const addEngineer =  new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
            engineerArray.push(addEngineer);
            firstQuestions()
        })
    };
    const generateInternCard = (answers) => {
        return `<div class="card" style="width: 18rem;">
         <div class="card-body ">
             <h5 class="card-title">${answers.name}</h5>
             <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Id: ${answers.id}</li>
                 <li class="list-group-item">Email: ${answers.email}</li>
                 <li class="list-group-item">School: ${answers.school}</li>
         </div>
     </div>`
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
        const addIntern =  new Intern(answers.name, answers.id, answers.email, answers.school);
        internArray.push(addIntern);
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
            console.log(managerArray);
            console.log(engineerArray);
            console.log(internArray);
            deleteHtml();
            topHtml();
            managerCard();

        }

    }
    )
};
firstQuestions()

const deleteHtml = () => {
    fs.unlinkSync("./team.html");
  };
  

const topHtml = () => {
fs.appendFileSync("team.html", generateTopHtml()) 
};

const managerCard = () => {
    managerArray.forEach((answers) => {
        fs.appendFileSync("team.html", generateManagerCard(answers))
    })
};
