const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment-app', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;