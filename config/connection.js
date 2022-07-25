const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.HOST,
  process.env.USER,
  process.env.PASSWORD,
  process.env.DB,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;

