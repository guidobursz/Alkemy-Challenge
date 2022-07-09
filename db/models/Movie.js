const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../dbconnect');

class Movie extends Model {}

Movie.init({
//Image - Title - Created At - Score (1 - 5)
    imageMovie: {
    type: DataTypes.STRING,
    allowNull: true
    },
    title: {
    type: DataTypes.STRING,
    allowNull: false
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: false
        },
    score: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Movie' // We need to choose the model name
});

module.exports = Movie;