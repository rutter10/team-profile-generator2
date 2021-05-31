const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./_domain/manager');
const Engineer = require('./_domain/engineer');
const Intern = require('./_domain/intern');

let output = "<h1>The team:</h1>";

const nextPromptQuestion = {
    type: 'list', message: 'Choose team member to add, by their role',
    choices: ['Engineer', 'Intern', 'Finish'], name: 'next'
};

const managerQuestions = [
    { type: 'input', message: 'Enter Team Manager\'s Name', name: 'name' },
    { type: 'input', message: 'Enter Employee ID Number', name: 'badge' },
    { type: 'input', message: 'Enter Email Address', name: 'email' },
    { type: 'input', message: 'Enter Office Number', name: 'extra' },
    nextPromptQuestion
];

const engineerQuestions = [
    { type: 'input', message: 'Enter Engineers\'s Name', name: 'name' },
    { type: 'input', message: 'Enter Employee ID Number', name: 'badge' },
    { type: 'input', message: 'Enter Email Address', name: 'email' },
    { type: 'input', message: 'Enter Github Username', name: 'extra' },
    nextPromptQuestion
];

const internQuestions = [
    { type: 'input', message: 'Enter Interns\'s Name', name: 'name' },
    { type: 'input', message: 'Enter Employee ID Number', name: 'badge' },
    { type: 'input', message: 'Enter Email Address', name: 'email' },
    { type: 'input', message: 'Enter School Name', name: 'extra' },
    nextPromptQuestion
];

function generateManagerHtml(manager) {
    const name = `<h2>${manager.getName()}</h2>`;
    const badge = `<p>${manager.getId().toString()}</p>`;
    const email = `<p><a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></p>`;
    const extra = `<p>${manager.getOfficeNumber()}</p>`;
    output = output.concat(name, badge, email, extra);
}

function generateEngineerHtml(engineer) {
    const name = `<h3>${engineer.getName()}</h3>`;
    const badge = `<p>${engineer.getId()}</p>`;
    const email = `<p><a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></p>`;
    const extra = `<p><a href="https://github.com/${engineer.getGithub()}">https://github.com/${engineer.getGithub()}</a></p>`;
    output = output.concat(name, badge, email, extra);
}

function generateInternHtml(intern) {
    const name = `<h3>${intern.getName()}</h3>`;
    const badge = `<p>${intern.getId()}</p>`;
    const email = `<p><a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></p>`;
    const extra = `<p>${intern.getSchool()}</p>`;
    output = output.concat(name, badge, email, extra);
}

function buildResponse({ name, badge, email, extra }, role) {
    if (role === 'Manager') {
        generateManagerHtml(new Manager(name, badge, email, extra));
    } else if (role === 'Engineer') {
        generateEngineerHtml(new Engineer(name, badge, email, extra), role);
    } else if (role === 'Intern') {
        generateInternHtml(new Intern(name, badge, email, extra));
    }
}

function ask(questions, role) {
    inquirer
        .prompt(questions)
        .then((answers) => {
            buildResponse(answers, role);
            switch (answers.next) {
                case 'Engineer':
                    ask(engineerQuestions, answers.next);
                    break;
                case 'Intern':
                    ask(internQuestions, answers.next);
                    break;
                default:
                    fs.writeFileSync('output.html', output, (err) => console.log(err));
                    break;
            }
        });
}
ask(managerQuestions, 'Manager');