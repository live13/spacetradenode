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
      }
    }
    , {
        freezeTableName: true,
        classMethods: {
          associate: function (models) {
            Ships.belongsTo(models.User, {foreignKey: 'owner_id'});
          }
        }
  });
  return Ships;
};