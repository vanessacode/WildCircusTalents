'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../index');

const Rol = sequelize.define(
  'Rol',
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {}
);

Rol.associate = ({ User }) => {
  Rol.hasMany(User, { foreignKey: 'rol_uuid', as: 'users' });
};

module.exports = Rol;
