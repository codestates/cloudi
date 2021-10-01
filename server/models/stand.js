'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.stand.belongsTo(models.user);
    }
  };
  stand.init({
    userId: DataTypes.INTEGER,
    standQuantity: DataTypes.INTEGER,
    standPrice: DataTypes.INTEGER,
    standImage: DataTypes.BLOB('long'),
    standPlate: DataTypes.STRING,
    standHolder: DataTypes.STRING,
    standText: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stand',
  });
  return stand;
};