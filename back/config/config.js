require('dotenv').config();

const host = process.env.HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASWWORD;
let database = process.env.DATABASE;
let dialect = process.env.DIALECT;

if (process.env.NODE_ENV === 'test') {
  database = process.env.DATABASE_TEST;
}

const conf = {
  host,
  username,
  password,
  database,
  dialect,
  logging: false,
};

module.exports = conf;
