const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./dbconnect');

//import models
const User = require('./models/User');
const Character = require('./models/Character');
const Genre = require('./models/Genre');
const Movie = require('./models/Movie');

//● Género: deberá tener: Películas o series asociadas.
// Por practica: cada pelicula tiene un genero
Genre.hasMany(Movie)
Movie.belongsTo(Genre)


//Start assocs Movies-Characters
//Create table: moviescharacters
class moviescharacters extends Model {}
moviescharacters.init({
        moviescharacterId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        }
    }, {
        sequelize, // We need to pass the connection instance
        modelName: 'Moviescharacters', // We need to choose the model name
        timestamps: false
    });
    module.exports = moviescharacters;

//Asocs:
Character.belongsToMany(Movie, {
    through: moviescharacters
})
Movie.belongsToMany(Character, {
    through: moviescharacters
})


/* 

● Personaje: deberá tener,
○ Películas o series asociadas.

● Película o Serie: deberá tener,
○ Personajes asociados.


*/