let movies = [];

const getAllMovies = () => {
    return movies;
};

const addMovie = (movie) => {
    movies.push(movie);
};

module.exports = {
    getAllMovies,
    addMovie
};