'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fb_id: {
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    money: DataTypes.INTEGER
    }
    , {
      freezeTableName: true,
        classMethods: {
        associate: function (models) {
          Users.hasMany(models.Ships);
      }
    }
  });
  return Users;
};
