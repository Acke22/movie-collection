const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'movie_user',
    password: 'Movie123!',
    database: 'movie_collection'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to MySQL database.');
    }
});

module.exports = db;