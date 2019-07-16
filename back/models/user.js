'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.UUID,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    isMember: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.HasOne(models.Rol)
  };
  return User;
};