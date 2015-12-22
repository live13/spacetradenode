'use strict';
module.exports = function(sequelize, DataTypes) {
  var Planets = sequelize.define('Planets', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER
  });
  return Planets;
};
