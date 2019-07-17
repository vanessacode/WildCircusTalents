'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      isMember: DataTypes.BOOLEAN,
    },
    {}
  );

  User.associate = ({ Rol }) => {
    User.belongsTo(Rol, { foreignKey: 'rol_uuid', as: 'rol' });
  };

  return User;
};

// User.belongsTo(Rol, { foreignKey: "uuid_rol", targetKey: "uuid" });
