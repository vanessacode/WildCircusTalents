'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../index');

const User = sequelize.define(
  'User',
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    isMember: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {}
);

User.associate = ({ Rol }) => {
  User.belongsTo(Rol, { foreignKey: 'rol_uuid', as: 'rol' });
};

module.exports = User;
