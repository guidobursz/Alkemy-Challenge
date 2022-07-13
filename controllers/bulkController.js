const User = require('../db/models/User');
const Character = require('../db/models/Character');
const Movie = require('../db/models/Movie');

const insertUser = async (req,res) => {
    let users = [
        {name: "Guido", lastname: "Bursz", email: "guido@gmail.com", password: await bcrypt.hash('123', 8)},
        {name: "Manuel", lastname: "Bursz", email: "manuel@gmail.com", password: await bcrypt.hash('123', 8)}
    ];

    User.bulkCreate(users);
    res.send('Bulk user created')
}

const insertCharacter = async (req,res) => {
    let characters = [
        {imageCharacter: "bulk", name: "Mickey", age: 18, weight: "13", history: "Mickey es orejon, nacido x"},
        {imageCharacter: "bulk", name: "Donald", age: 19, weight: "15", history: "Donald es pato, nacido x"}
    ];

    Character.bulkCreate(characters);
    res.send('Bulk character created')
}

const insertMovie = async (req,res) => {
    let movies = [
        {imageMovie: "bulk", title: "Mickey el divertido", created_at: 1998, score: 5},
        {imageMovie: "bulk2", title: "Donald el acuatico", created_at: 1999, score: 5},
        {imageMovie: "bulk3", title: "Daisy la pata", created_at: 2005, score: 3},
        {imageMovie: "bulk4", title: "Pluto el can", created_at: 2000, score: 4},
        {imageMovie: "bulk5", title: "Las travesura de mickey", created_at: 2008, score: 4},
        {imageMovie: "bulk6", title: "Donald y los amigos", created_at: 2004, score: 3}
    ];

    Movie.bulkCreate(movies);
    res.send('Bulk movies created')
}

module.exports = {insertUser,insertCharacter,insertMovie}