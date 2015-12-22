'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    count: DataTypes.INTEGER,
    name: DataTypes.STRING
  });
  return Item;
};
