//Imports
const express = require('express');

//Server and port
const app = express();
const port = 8080;

//Connection DB
const connection = require('./config/config');

//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Configure routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Server ok!!!! </h1>');
});

// Launch server
app.listen(port, () => console.log('Server listening on port 8080!'));
