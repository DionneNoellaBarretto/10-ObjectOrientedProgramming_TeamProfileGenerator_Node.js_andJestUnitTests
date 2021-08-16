// importing modules/dependent files
const inquirer = require("inquirer");
const fs = require("fs");
require("./javascript/all")
const Engineer = require("./javascript/engineer")
const Manager = require("./javascript/manager")
const Intern = require("./javascript/intern")
// this will help will styling the dynamically generated html team profile page 
const styling = require("./javascript/css");
const path = require("path");

// // validation for input
// const validateNumbers = moreValidationChecks => ({
//     validate: input => {
//         if (input === '') {
//             return 'Please provide a valid number greater then 0'
//         }
//         return moreValidationChecks ? moreValidationChecks(input) : true
//     },
//     filter: input => {
//         // clear the invalid input
//         return Number.isNaN(input) || Number(input) <= 0 ? '' : Number(input)
//     },
// })

let TeamProfile = [];

function renderTeamProfile() {
    inquirer.prompt([{
            //message is the qn prompt
            message: "Please input a team name using this team Profile Generator:",
            //this is the answer input placeholder
            name: "teamname"
        }])
        .then(function (data) {
            const teamName = data.teamname
            TeamProfile.push(teamName)
            addManager();
        })
}

function addManager() {
    inquirer.prompt([{
                message: "Team Manager's name:",
                name: "name",
            },
            {
                message: "Team Manager's email address:",
                name: "email",
                //this ensures the email entered is in valid email format without which user cannot proceed to the next prompt
                validate: function(email)
                {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: "number",
                message: "Team Manager's cabin number (Example: 1234, 123,1):",
                name: "officeNumber",
                // validateNumbers()
            },
            {
                type: "number",
                message: "Team Manager's mobile number:",
                name: "mobileNumber",
                validate: function(number)
                {
                    //https://www.regextester.com/103299
                var option = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/gm;
                 //ref: https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number regex phone number check that ensures the phone number is entered in acceptable formats with an optional separator
                 return option.test(number);
                }
            },
        ])
        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const mobileNumber = data.mobileNumber
            const teamMember = new Manager(name, id, email, officeNumber, mobileNumber)
            TeamProfile.push(teamMember)
            addEmployee();
        });
}

function addEmployee() {
    inquirer.prompt([{
            type: "list",
            message: "Looking to add more members to team? Navigate through the list using arrow keys & select an option by using the enter key",
            choices: ["Add another Manager", "Add an Engineer/Developer", "Add an Intern", "No, show me my team"],
            name: "addMemberData"
        }])
        .then(function (data) {
            switch (data.addMemberData) {
                case "Add another Manager":
                    addManager();
                    break;

                case "Add an Intern":
                    addIntern();
                    break;

                case "Add an Engineer/Developer":
                    addEngineer();
                    break;

                case "No, show me my team":
                    buildTeamProfile();
                    break;
            }
        });
}

function addIntern() {
    inquirer.prompt([{
                message: "Intern's name:",
                name: "name"
            },
            {
                type: "number",
                message: "Intern's graduation year:",
                name: "year",
                // validateNumbers()
            },
            {
                message: "Intern's email address:",
                name: "email",
                validate: function(email)
                {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                message: "Intern's school:",
                name: "school"
            }
        ])
        .then(function (data) {
            const name = data.name
            const id = TeamProfile.length + 1
            const email = data.email
            const school = data.school
            const year = data.year
            const teamMember = new Intern(name, id, email, school,year)
            TeamProfile.push(teamMember)
            addEmployee()
        });
};


function addEngineer() {
    inquirer.prompt([{
                message: "Engineer's name:",
                name: "name"
            },
            {
                message: "Enter 1 or 2 skills you've mastered! :",
                name: "name"
                // type: 'multi-choice',
                // name: 'skill',
                // message: 'Select 1 skill you have mastered!',
                // rows: [
                // {
                //     name: 'Skill(s)',
                //     choices: [
                //     {
                //         name: 'HTML',
                //         value: '#f00',
                //     },
                //     {
                //         name: 'CSS',
                //         value: '#0f0',
                //     },
                //     {
                //         name: 'JavaScript',
                //         value: '#00f',
                //     },
                //     ],
                // },
                // ],
            },
            {
                message: "Engineer's email address:",
                name: "email",
                validate: function(email)
                {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                message: "Engineer's Github username:",
                name: "github"
            }
        ])
        .then(function (data) {
            const name = data.name
            const id = TeamProfile.length + 1
            const email = data.email
            const github = data.github
            const skill = data.skill
            const teamMember = new Engineer(name, id, email, github,skill)
            TeamProfile.push(teamMember)
            addEmployee()
        });
};

function buildTeamProfile() {
    console.log(`You've successfully created your team profile using this generator. Please review all information you've entered by navigating to ./${TeamProfile[0]}.html before pushing your changes to github using your terminal & navigating to https://dionnenoellabarretto.github.io/10-valueOrientedProgramming_TeamProfileGenerator_Node.js_andJestUnitTests/${TeamProfile[0]}.html`);
    const htmlPage = [];
    const htmlStart = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Page Title -->
    <title>${TeamProfile[0]}</title>
    <!-- Custom Font - Google Import -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap" rel="stylesheet">
    <!-- link to font awesome icons -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <!-- Custom styling embedded using js constant assignment ( this could have been a mere style sheet reference as well like the above links but here's an experiment to show different ways of importing dynamically) -->
    <style>
     ${styling}
    </style>
</head>
<body>
<!-- team name header up top -->
    <div class="banner-bar">
        <h1>${TeamProfile[0]}
        <i class="fas fa-users"></i></h1>
    </div>
    <!--section for all the team member profile cards -->
    <div class="card-container">
    `
    htmlPage.push(htmlStart);
    for (let i = 1; i < TeamProfile.length; i++) {
        let value = `
        <div class="card">
            <div class="card-header">
            <h2><i class="fas fa-user-tag"></i> ${TeamProfile[i].name} \n (${TeamProfile[i].title})</h2>
                
            </div>
            <div class="card-body">
                <p> <i class="fas fa-id-badge"></i> <u>Employee ID: </u> ${TeamProfile[i].id}</p>
                <p> <i class="fas fa-envelope-square"></i> <u>Email: </u> <a href="mailto:${TeamProfile[i].email}">${TeamProfile[i].email}</a></p>
        `
        if (TeamProfile[i].officeNumber) {
            value += `
            <p><i class="fas fa-search-location"></i> <u>Office Number: </u>${TeamProfile[i].officeNumber}</p>
            `
        }
        if (TeamProfile[i].mobileNumber) {
            value += `
            <p><i class="fas fa-phone-alt"></i> <u>Contact Number: </u>${TeamProfile[i].mobileNumber} </p>
            `
        }
        if (TeamProfile[i].skill) {
            value += `
            <p><i class="fas fa-cogs"></i> <u>Skill(s): </u>${TeamProfile[i].skill}</p>
            `
        }
        if (TeamProfile[i].github) {
            value += `
            <p><i class="fab fa-github"></i> <u>GitHub: </u> <a href="https://github.com/${TeamProfile[i].github}">${TeamProfile[i].github}</a></p>
            `
        }
        if (TeamProfile[i].school) {
            value += `
            <p><i class="fas fa-graduation-cap"></i> <u>University: </u> <a href="https://www.google.com/search?q=${TeamProfile[i].github}">${TeamProfile[i].school}</a></p>
            `
        }
        if (TeamProfile[i].year) {
            value += `
            <p><i class="fas fa-calendar-day"></i> <u>Graduation Year: </u>${TeamProfile[i].year}</p>
            `
        }
        value += `
        </div>
        </div>
        `
        htmlPage.push(value)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlPage.push(htmlEnd);

    fs.writeFile(`./${TeamProfile[0]}.html`, htmlPage.join(""), function (err) {})
}

renderTeamProfile()