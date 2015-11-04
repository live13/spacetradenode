'use strict';
module.exports = function(sequelize, DataTypes) {
  var Goods = sequelize.define('Goods', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
      }
    }
  });
  return Goods;
};
