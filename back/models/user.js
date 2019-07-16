"use strict";
const Sequelize = require("sequelize");
const Rol = require("./rol");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      uuid_rol: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Rol',
          key: 'uuid'
        }
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      isMember: DataTypes.BOOLEAN
    },
    {}
  );

  return User;
};

User.belongsTo(Rol, { foreignKey: "uuid_rol", targetKey: "uuid" });
