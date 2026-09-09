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
        rating: req.body.rating || null
    };

    movieModel.addMovie(newMovie, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error adding movie.');
        }

        res.redirect('/');
    });
};

// Prikazuje formu za izmenu filma
const showEditForm = (req, res) => {
    const id = req.params.id;

    movieModel.getMovieById(id, (err, movie) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error loading movie.');
        }

        res.render('editMovie', { movie });
    });
};

// Cuva izmene filma
const updateMovie = (req, res) => {
    const id = req.params.id;

    const updatedMovie = {
        title: req.body.title,
        director: req.body.director,
        release_year: req.body.year,
        genre: req.body.genre,
        rating: req.body.rating || null
    };

    movieModel.updateMovie(id, updatedMovie, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error updating movie.');
        }

        res.redirect('/');
    });
};

// Brise film
const deleteMovie = (req, res) => {
    const id = req.params.id;

    movieModel.deleteMovie(id, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting movie.');
        }

        res.redirect('/');
    });
};

const searchMovies = (req, res) => {
    const title = req.query.title;

    movieModel.searchMoviesByTitle(title, (err, movies) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error searching movies.');
        }

        res.render('index', { movies });
    });
};

const filterMovies = (req, res) => {
    const genre = req.query.genre;

    movieModel.filterMoviesByGenre(genre, (err, movies) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error filtering movies.');
        }

        res.render('index', { movies });
    });
};

module.exports = {
    getMovies,
    showAddForm,
    addMovie,
    showEditForm,
    updateMovie,
    deleteMovie,
    searchMovies,
    filterMovies
};