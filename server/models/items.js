'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    count: DataTypes.STRING,
    pass: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Item.hasOne(models.Goods);
      }
    }
  });
  return Item;
};
