const Sequelize = require('sequelize');

// set up a connection pool
const sequelize = new Sequelize('node-complete', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;