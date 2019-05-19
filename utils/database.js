const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_seeder', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
