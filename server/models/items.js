'use strict';
module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define('Items', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    count: DataTypes.INTEGER,
    name: DataTypes.STRING
  });
  return Items;
};
