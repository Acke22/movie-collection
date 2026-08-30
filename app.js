const express = require('express');

const app = express();

// Ucitavanje ruta za filmove
const movieRoutes = require('./routes/movieRoutes');

// EJS koristimo za View deo MVC arhitekture
app.set('view engine', 'ejs');

// Omogucava citanje podataka iz formi
app.use(express.urlencoded({ extended: true }));

// Povezivanje ruta sa aplikacijom
app.use('/', movieRoutes);

// Port na kojem ce aplikacija raditi
const PORT = 3000;

// Pokretanje servera
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});