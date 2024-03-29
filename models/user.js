'use strict';
const bcrypt = require('bcrypt');
const { Promise } = require('sequelize');
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: { type: DataTypes.STRING, allowNull: false },
    password: DataTypes.VIRTUAL

  }, {
    hooks: {
      beforeCreate: (user, options) => {
        return new Promise((res, rej) => {
          if (user.password) {
            bcrypt.hash(password, 10, (error, hash) => {
              user.password_hash = hash
              res()
            })
          }
        })
      }
    }
    ,
    sequelize,
    modelName: 'User',
  });
  return User;
};