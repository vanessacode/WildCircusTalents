'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define(
    'Rol',
    {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );

  Rol.associate = ({ User }) => {
    Rol.hasMany(User, { foreignKey: 'rol_uuid', as: 'users' });
  };

  return Rol;
};

// Rol.hasMany(User);
