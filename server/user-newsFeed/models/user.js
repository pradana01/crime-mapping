'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {

  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'name cannot be empty'
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'location cannot be empty'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password cannot be empty'
        }
      }
    }
  }, { sequelize });
  User.beforeCreate((instance, option) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models,CrimeReport)
    User.belongsToMany(models.CrimeReport, {through: models.Comment})
  };
  return User;
};