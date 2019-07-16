"use strict";
const Sequelize = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    "Rol",
    {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: DataTypes.STRING,
      function: DataTypes.STRING
    },
    {}
  );

  return Rol;
};

Rol.hasMany(User);

