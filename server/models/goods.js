'use strict';
//goods type
module.exports = function(sequelize, DataTypes) {
  var Goods = sequelize.define('Goods', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER //capacity need to store single good entity
  });
  return Goods;
};
