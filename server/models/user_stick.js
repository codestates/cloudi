'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_stick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user_stick.belongsTo(models.user);
      models.user_stick.belongsTo(models.stick);
    }
  };
  user_stick.init({
    userId: DataTypes.INTEGER,
    stickId: DataTypes.INTEGER,
    stickQuantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_stick',
  });
  return user_stick;
};