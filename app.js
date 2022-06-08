const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('PLease enter name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
        validate: username => {
          if (username) {
            return true;
          } else {
            console.log("Please enter your github username!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself: ',
      }
    ])
}

const promptProject = portfolioData => {

  console.log(`
    ===================
    Add a new project
    ===================
  `);
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: projectName => {
        if (projectName) {
          return true;
        } else {
          console.log("Please enter a project name")
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project (Required)",
      validate: projectDesc => {
        if (projectDesc) {
          return true;
        } else (
          console.log("Please enter a project description")
        )
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Choose all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: gitHubLink => {
        if (gitHubLink) {
          return true;
        } else {
          console.log("Please enter the github link")
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);

      } else {
        return portfolioData;
      }

    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData)
  });




// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
