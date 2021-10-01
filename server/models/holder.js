'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class holder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  holder.init({
    holderType: DataTypes.STRING,
    holderMaterial: DataTypes.STRING,
    holderPrice: DataTypes.INTEGER,
    holderImage: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'holder',
  });
  return holder;
};