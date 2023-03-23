const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:test123@localhost:5432/exercises');

module.exports = sequelize;
