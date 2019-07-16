//Imports
const express = require("express");

//Server and port
const app = express();
const port = 8080;

//Connection DB
const connection = require("./config/config");
const Index = require("./models/index");
const User = require("./models/user");
const Rol = require("./models/rol");
const Sequelize = require("sequelize");
const sequelize = require("./config/connect");

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (err) {
//   console.error("Unable to connect to the database:", err);
//   process.exit();
// }


// User.belongsTo(Rol, { foreignKey: "uuid_rol", targetKey: "uuid" });
// Rol.hasMany(User);

// await sequelize.sync(); // {force: true} to erase all data in the database

//Body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Configure routes
app.get("/", (req, res) => {
  res.status(200).send("<h1>Server ok!!!! </h1>");
});

// Launch server
app.listen(port, () => console.log("Server listening on port 8080!"));
