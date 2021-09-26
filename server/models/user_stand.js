'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_stand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user_stand.belongsTo(models.user);
      models.user_stand.belongsTo(models.stand);
    }
  };
  user_stand.init({
    userId: DataTypes.INTEGER,
    standId: DataTypes.INTEGER,
    standQuantity: DataTypes.INTEGER,
    standText: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_stand',
  });
  return user_stand;
};