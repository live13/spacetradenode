'use strict';
module.exports = function(sequelize, DataTypes) {
  var CargoHolds = sequelize.define('CargoHolds', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        capacity: DataTypes.INTEGER, //total capacity
        fullness: DataTypes.INTEGER
      }
      , {
        freezeTableName: true,
        classMethods: {
          associate: function (models) {
            CargoHolds.hasMany(models.GoodsStacks);
          }
        }
      });
  return CargoHolds;
};