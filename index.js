const inquirer = require('inquirer');



//manager
inquirer
    .prompt(
        {
            type: 'input',
            name: 'Managers name',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'email address of the team manager?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'What is the office number of the team manager?',
        }
);
//engineer
inquirer
    .prompt(
        //{
            //type: 'list',
            //name: 'role',
            //message:'Please choose your role?',
            //choices: ['Engineer', 'Intern']
        //} ,
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',

        },
        {
            type: 'input',
            name: ' email',
            message: 'Enter the employee email',
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username",
        }
    )
    //intern
    inquirer
    .prompt(
        //{
            //type: 'list',
            //name: 'role',
            //message:'What is your role?',
            //choices: ['Engineer', 'Intern']
        //} ,
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID',
        },
        {
            type: 'input',
            name: ' email',
            message: 'Enter the employee email',
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school",
        }
    )