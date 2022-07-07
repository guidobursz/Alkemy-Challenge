const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../dbconnect');

class User extends Model {}

User.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    lastname: {
    type: DataTypes.STRING,
    allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
        },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auth:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

module.exports = User;