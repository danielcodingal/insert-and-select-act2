// Import the sqlite3 module
const sqlite3 = require('sqlite3').verbose();

// Open a connection to the database
const db = new sqlite3.Database('example.db', (err) => {
    if (err) {
        return console.error("Error connecting to the database: ", err.message);
    }
    console.log("Connected to the SQLite database.");
});

// SQL query to retrieve all data from the 'users' table
const selectQuery = `SELECT * FROM users;`;

// Execute the SELECT query
db.all(selectQuery, [], (err, rows) => {
    if (err) {
        return console.error("Error fetching data: ", err.message);
    }

    // Loop through the rows and display each record
    rows.forEach((row) => {
        console.log(`${row.id}: ${row.name}, ${row.email}`);
    });
});

// Close the database connection
db.close((err) => {
    if (err) {
        return console.error("Error closing the database: ", err.message);
    }
    console.log("Database connection closed.");
});
