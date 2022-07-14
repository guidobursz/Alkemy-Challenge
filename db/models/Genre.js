const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../dbconnect');

class Genre extends Model {}
//name , image
Genre.init({
    name: {
    type: DataTypes.STRING,
    allowNull: true
    },
    image: {
    type: DataTypes.STRING,
    allowNull: false
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Genre', // We need to choose the model name
    timestamps: false
});

module.exports = Genre;