require("dotenv").config();
const Sequelize = require("sequelize");

let dbName = process.env.DATABASE;
if (process.env.NODE_ENV === "test") {
  dbName = process.env.DATABASE_TEST;
}

module.exports = new Sequelize(dbName, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});