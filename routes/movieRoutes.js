const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

// Prikaz svih filmova
router.get('/', movieController.getMovies);

// Forma za dodavanje novog filma
router.get('/movies/add', movieController.showAddForm);

// Cuvanje novog filma
router.post('/movies', movieController.addMovie);

// Forma za izmenu filma
router.get('/movies/edit/:id', movieController.showEditForm);

// Cuvanje izmena filma
router.post('/movies/edit/:id', movieController.updateMovie);

// Brisanje filma
router.post('/movies/delete/:id', movieController.deleteMovie);

module.exports = router;