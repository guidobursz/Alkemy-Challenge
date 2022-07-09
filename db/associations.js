const User = require('./models/User');
const Character = require('./models/Character');
const Genre = require('./models/Genre');
const Movie = require('./models/Movie');

//Asociaciones:

//Personaje -> pertenece a muchas peliculas/serie
// Pelicula/Serie -> Tiene a muchos personajes
// Pelicula/Serie -> Tiene un genero
// Genero -> Pertenece a varias peliculas

/* 

● Personaje: deberá tener,
○ Películas o series asociadas.

● Película o Serie: deberá tener,
○ Personajes asociados.

● Género: deberá tener,
○ Películas o series asociadas.


*/