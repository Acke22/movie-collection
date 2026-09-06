const movieModel = require('../models/movieModel');

// Prikazuje sve filmove
const getMovies = (req, res) => {
    movieModel.getAllMovies((err, movies) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error loading movies.');
        }

        res.render('index', { movies });
    });
};

// Prikazuje formu za dodavanje filma
const showAddForm = (req, res) => {
    res.render('addMovie');
};

// Dodaje novi film
const addMovie = (req, res) => {
    const newMovie = {
        title: req.body.title,
        director: req.body.director,
        release_year: req.body.year,
        genre: req.body.genre,
        rating: null
    };

    movieModel.addMovie(newMovie, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error adding movie.');
        }

        res.redirect('/');
    });
};

module.exports = {
    getMovies,
    showAddForm,
    addMovie
};