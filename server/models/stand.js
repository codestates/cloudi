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
      models.stand.hasMany(models.user_stand);
    }
  };
  stand.init({
    standMaterial: DataTypes.STRING,
    standHolder: DataTypes.STRING,
    standPrice: DataTypes.INTEGER,
    standImage: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'stand',
  });
  return stand;
};