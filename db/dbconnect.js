const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    database, username, password, {
    host,
    dialect: 'mysql'
});

module.exports = sequelize;