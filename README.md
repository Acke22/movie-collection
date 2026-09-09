# movie-collection

Kolekcija filmova je veb aplikacija namenjena za upravljanje ličnom kolekcijom filmova.

Aplikacija omogućava korisniku da:
- pregleda sve filmove,
- dodaje nove filmove,
- menja podatke o postojećim filmovima,
- briše filmove,
- ocenjuje filmove,
- pretražuje filmove po naslovu.

Aplikacija je izrađena korišćenjem MVC (Model-View-Controller) arhitekture.

## Korišćene tehnologije

- Node.js
- Express.js
- EJS
- MySQL
- HTML
- Git i GitHub

## MVC arhitektura

Aplikacija je organizovana prema MVC (Model-View-Controller) arhitekturi:

- **Model** – zadužen za komunikaciju sa MySQL bazom podataka.
- **View** – zadužen za prikaz korisničkog interfejsa pomoću EJS stranica.
- **Controller** – obrađuje zahteve korisnika i povezuje Model i View.
- **Routes** – definišu putanje aplikacije i povezuju ih sa odgovarajućim funkcijama kontrolera.

## Struktura projekta

movie-collection/
- config/ – konfiguracija veze sa bazom podataka
- controllers/ – kontroleri aplikacije
- models/ – modeli za rad sa podacima
- routes/ – rute aplikacije
- views/ – EJS stranice korisničkog interfejsa
- app.js – glavna datoteka za pokretanje aplikacije
- package.json – podaci o projektu i zavisnostima
## Baza podataka

Za čuvanje podataka koristi se MySQL baza podataka.

Tabela `movies` sadrži sledeće podatke o filmovima:

- ID filma
- naslov
- režiser
- godina izlaska
- žanr
- ocena

## Pokretanje aplikacije

1. Instalirati potrebne pakete:
   `npm install`

2. Pokrenuti MySQL server i obezbediti bazu podataka `movie_collection`.

3. Pokrenuti aplikaciju:
   `node app.js`

4. U internet pregledaču otvoriti:
   `http://localhost:3000`