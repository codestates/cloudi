'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  plate.init({
    plateMaterial: DataTypes.STRING,
    platePrice: DataTypes.INTEGER,
    plateImage: DataTypes.BLOB('long'),
  }, {
    sequelize,
    modelName: 'plate',
  });
  return plate;
};