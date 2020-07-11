// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown.js')
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile)


function prompts(){
    return inquirer.prompt([
        {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
        },
        {
        type: 'input',
        message: 'What is a description of the project?',
        name: 'description'
        },
        {
        type: 'input',
        message: 'What are any specific installation instructions?',
        name: 'install'
        },
        {
        type: 'input',
        message: 'What can this project be used for?',
        name: 'usage'
        },
        {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributions'
        },
        {
        type: 'input',
        message: 'What license is used?',
        name: 'license',
        },
        {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
        },
        {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
        },
    ]);
};

async function completeMD(){
    try{
        const data = await prompts();
        const md = generateMarkdown(data);
        console.log(data)
        await writeFileAsync('README.md', md);
        console.log("Great Success!")
    } catch(err){
        console.log("Error!");
    };
};
completeMD();