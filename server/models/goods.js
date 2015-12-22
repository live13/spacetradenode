'use strict';
module.exports = function(sequelize, DataTypes) {
  var Goods = sequelize.define('Goods', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.INTEGER
  });
  return Goods;
};
