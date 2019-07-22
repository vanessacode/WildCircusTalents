const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const app = express();

// Reach Sequelize model
const User = require('../sequelize/models/users');

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
