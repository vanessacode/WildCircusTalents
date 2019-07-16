const config = require("./config");

const dbName = config.development.database;
const dbUser = config.development.username;
const dbPass = config.development.password;
const dbHost = config.development.host;
const dbPort = "8080";
const dbDialect = config.development.dialect;

module.exports = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: dbPort,
  dialect: dbDialect
});
