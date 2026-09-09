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

const getMovieById = (id, callback) => {
    const sql = 'SELECT * FROM movies WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results[0]);
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

const updateMovie = (id, movie, callback) => {
    const sql = `
        UPDATE movies
        SET title = ?, director = ?, release_year = ?, genre = ?, rating = ?
        WHERE id = ?
    `;

    const values = [
        movie.title,
        movie.director,
        movie.release_year,
        movie.genre,
        movie.rating,
        id
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const deleteMovie = (id, callback) => {
    const sql = 'DELETE FROM movies WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
};