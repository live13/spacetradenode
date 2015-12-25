'use strict';
module.exports = function(sequelize, DataTypes) {
  var ShipBodies = sequelize.define('ShipBodies', {
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
  return ShipBodies;
};