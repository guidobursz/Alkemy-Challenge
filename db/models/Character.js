const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../dbconnect');

class Character extends Model {}

Character.init({
//Image-Name-Age-Weight-History
    imageCharacter: {
    type: DataTypes.STRING,
    allowNull: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
        },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    history: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Character' // We need to choose the model name
});

module.exports = Character;