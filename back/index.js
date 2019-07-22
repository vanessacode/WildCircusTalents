require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize');

// Swagger doc
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Console Logging
const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.bold.green;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(require('express-status-monitor')({ title: 'Wild Circus Biarritz' }));

// Reach Sequelize model
const User = require('./sequelize/models/users');

// Get all users
app.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.status(200).json(users);
  });
});

// Post an user
app.post('/users', (req, res) => {
  User.create(req.body).then((createdUser) => {
    res.status(200).json(createdUser);
  });
});

async function main() {
  await sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log(success('Connection successful.'));
    app.listen(PORT, (err) => {
      if (err) {
        throw new Error(error('Something bad happened ...'));
      }
      console.log(success(`Listening to ${PORT}.`));
    });
  } catch (err) {
    console.error(error('Unable to reach database: '), err);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}

module.exports = app;
