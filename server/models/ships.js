'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ships = sequelize.define('Ships', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: DataTypes.STRING,
      owner_id: { type: DataTypes.INTEGER,
                  allowNull: false
      },
      ship_body_id: DataTypes.INTEGER, //body type
      cargo_hold_id: DataTypes.INTEGER //cargo hold of the ship ()
    }
    , {
        freezeTableName: true,
        classMethods: {
          associate: function (models) {
            Ships.belongsTo(models.Users, {foreignKey: 'owner_id'});
          }
        }
  });
  return Ships;
};