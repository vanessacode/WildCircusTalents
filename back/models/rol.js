'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: DataTypes.STRING,
    function: DataTypes.STRING
  }, {});
  Rol.associate = function(models) {
    // associations can be defined here
    models.Rol.belongTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Rol;
};