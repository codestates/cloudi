'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.stick.hasMany(models.user_stick);
    }
  };
  stick.init({
    stickName: DataTypes.STRING,
    stickDesc: DataTypes.STRING,
    stickScope: DataTypes.JSON,
    stickGrade: DataTypes.INTEGER,
    stickPrice: DataTypes.INTEGER,
    stickImage: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'stick',
  });
  return stick;
};