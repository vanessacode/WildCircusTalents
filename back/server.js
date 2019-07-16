//Imports
const express = require('express');

//Server and port
const app = express();
const port = 8080;

//Configure routes

app.get('/', (req, res) => {
  res.status(200).send('<h1>Server ok!!!! </h1>');
});

app.listen(port, () => console.log('Server listening on port 8080!'));
