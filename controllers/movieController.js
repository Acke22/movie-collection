const movieModel = require('../models/movieModel');

// Prikazuje sve filmove
const getMovies = (req, res) => {
    const movies = movieModel.getAllMovies();
    res.render('index', { movies });
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
        year: req.body.year,
        genre: req.body.genre
    };

    movieModel.addMovie(newMovie);

    res.redirect('/');
};

module.exports = {
    getMovies,
    showAddForm,
    addMovie
};