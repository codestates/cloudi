'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.user_stick);
      models.user.hasMany(models.stand);
    }
  };
  user.init({
    kakaoId: DataTypes.INTEGER,
    googleId: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    userEmail: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};