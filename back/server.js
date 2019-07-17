//Imports
const express = require('express');

//Server and port
const app = express();
app.use(express.json());
const port = 4000;

//Connection DB
const { sequelize, User } = require('./models');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connect');
    //Configure routes
    app.get('/users', (req, res) => {
      User.findAll().then((users) => {
        res.status(200).json(users);
      });
    });

    app.post('/users', (req, res) => {
      User.create(req.body).then((createdUser) => {
        res.status(200).json(createdUser);
      });
    });

    // Launch server
    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, () => console.log('Server listening on port 4000!'));
    }
  })
  .catch((err) => {
    console.log('No connect');
  });

module.exports = app;
