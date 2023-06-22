// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Query database example sanitized
let deletedRow = 2;

db.query(`DELETE FROM favorite_books WHERE id = ?`, deletedRow, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

//Function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
  console.log('Working!');
  inquirer.prompt(questions).then((answers) => {

});
}
// Function call to initialize app
init();