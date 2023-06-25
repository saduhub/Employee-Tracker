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

// Query database example sanitized
// let deletedRow = 2;

// db.query(`DELETE FROM favorite_books WHERE id = ?`, deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });
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
        const employeesQuery = 'SELECT * FROM employee';
        db.query(employeesQuery, (err, result) => {
          if (err) {
            console.log('Error:', err.message);
            return;
          }
          printTable(result);
          init();
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