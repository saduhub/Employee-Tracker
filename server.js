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

// Query database
db.query('SELECT * FROM favorite_books', function (err, results) {
  console.log(results);
});

//Function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
  console.log('Hi, welcome to SVG Logo Generator');
  inquirer.prompt(questions).then((answers) => {

});
}
// Function call to initialize app
init();