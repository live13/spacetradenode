'use strict';
module.exports = function(sequelize, DataTypes) {
  var ShipHulls = sequelize.define('ShipHulls', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        title: DataTypes.STRING,
        speed: DataTypes.INTEGER
      }
      , {
        freezeTableName: true,
        classMethods: {
        }
      });
  return ShipHulls;
};
