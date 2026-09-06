const db = require('../config/database');

const getAllMovies = (callback) => {
    const sql = 'SELECT * FROM movies ORDER BY id DESC';

    db.query(sql, (err, results) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results);
    });
};

const addMovie = (movie, callback) => {
    const sql = `
        INSERT INTO movies (title, director, release_year, genre, rating)
        VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
        movie.title,
        movie.director,
        movie.release_year,
        movie.genre,
        movie.rating
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

module.exports = {
    getAllMovies,
    addMovie
};