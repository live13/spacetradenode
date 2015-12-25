'use strict';
//goods stack of single type
module.exports = function(sequelize, DataTypes) {
  var GoodsStacks = sequelize.define('GoodsStacks', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    good_id: DataTypes.INTEGER, //type of goods stack
    count: DataTypes.INTEGER, //count of goods in stack
    cargo_hold_id: DataTypes.INTEGER // where goods are stored
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function (models) {
        GoodsStacks.belongsTo(models.CargoHolds, {foreignKey: 'cargo_hold_id'});
        GoodsStacks.belongsTo(models.Goods, {foreignKey: 'good_id'});
      }
    }
  });
  return GoodsStacks;
};