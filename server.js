// Import environment variables.
require('dotenv').config();
// Packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const figlet = require('figlet');
const { printTable } = require('console-table-printer');
// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.MYSQL_USERNAME,
    // MySQL password
    password: process.env.DB_PASSWORD,
    // Connect to specific database
    database: 'company_db'
  },
  console.log(`Connected to MySQL`)
);

// Questions to be used by inquirer
const questions = [
  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee','update an employee role']
    // filter(val) {
    // return val;
    // },
  },
  // {
  //   type: 'input',
  //   name: 'text',
  //   message: 'Please enter logo text',
  //   // validate: validateText,
  // }
];

// ASCII art text for "Employee Tracker"
const asciiArtText = figlet.textSync('Employee Tracker', {
  font: 'Standard', // Specify the font style
});

// Function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
  inquirer.prompt(questions).then((answers) => {
    switch (answers.choice) {
      case 'view all departments':
        const departmentQuery = 'SELECT * FROM department';
        db.query(departmentQuery, (err, result) => {
          if (err) {
            console.log('Error:', err.message);
            return;
          }
          printTable(result);
          init();
        });
        break;
      case 'view all roles':
        const rolesQuery = 'SELECT * FROM role';
        db.query(rolesQuery, (err, result) => {
          if (err) {
            console.log('Error:', err.message);
            return;
          }
          printTable(result);
          init();
        });
        break;
      case 'view all employees':
        // Make .sql file to accomodate Query? For now, below is more concise way of writting SELECT id, name AS 'Employee ID' FROM employee...
        const employeesQuery = `SELECT e.id AS 'Employee ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Job Title', d.name AS 'Department', r.salary AS 'Salary', m.last_name AS 'Manager' FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON e.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id`;
        db.query(employeesQuery, (err, result) => {
          if (err) {
            console.log('Error:', err.message);
            return;
          }
          printTable(result);
          init();
        });
        break;
      case 'add a department':
        const departmentQuestion = [
          {
            type: 'input',
            name: 'departmentName',
            message: 'Please enter department name',
            // validate: validateText,
          }
        ];
        inquirer.prompt(departmentQuestion).then((departmentAnswer) => {
          const addDepartment = `INSERT INTO department (name) VALUES (?)`;
          // Extract the movie name from the request body to add in lace of the (?)
          const newDepartment = [departmentAnswer.departmentName];
          db.query(addDepartment, newDepartment, (err, result) => {
            if (err) {
              console.log('Error:', err.message);
              return;
            }
            console.log('Department successfully added')
            init();
          });
        });
        break;
      // Add cases for other choices
      default:
        console.log('Invalid choice. Please select a valid option.');
        init();
        break;
    }
  });
}
console.log(asciiArtText);
// Function call to initialize app
init();