require("dotenv").config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASWWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  test: {
    password: process.env.DB_PASWWORD,
    username: process.env.DB_USER,
    database: process.env.DATABASE_TEST,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASWWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
}

module.exports = config;