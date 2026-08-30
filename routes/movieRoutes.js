const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

// Prikaz svih filmova
router.get('/', movieController.getMovies);

// Forma za dodavanje novog filma
router.get('/movies/add', movieController.showAddForm);

// Cuvanje novog filma
router.post('/movies', movieController.addMovie);

module.exports = router;