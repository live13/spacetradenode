'use strict';
module.exports = function(sequelize, DataTypes) {
  var Goods = sequelize.define('Good', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    classMethods: {

    }
  });
  return Goods;
};
