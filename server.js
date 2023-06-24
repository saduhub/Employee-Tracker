// Import environment variables.
require('dotenv').config();
// Packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const figlet = require('figlet');
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
  console.log(asciiArtText);
  inquirer.prompt(questions).then((answers) => {
    if (answers.choice === 'view all departments') {
      const sql = 'SELECT * FROM department';
      db.query(sql, (err, result) => {
          if (err) {
            console.log('Error:', err.message);
            return;
          }
          console.log('Department Tables:');
          console.log(result);
        });
    }
});
}
// // Function call to initialize app
init();