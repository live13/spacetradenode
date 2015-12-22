'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
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
    pass: DataTypes.STRING
    }
    , {
      freezeTableName: true,
        classMethods: {
        associate: function (models) {
          User.hasMany(models.Ships);
      }
    }
  });
  return User;
};
