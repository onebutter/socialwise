import bcrypt from 'bcryptjs';
import pick from 'lodash/pick';
import allowed from './permissions';

//add namecard functionality

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {
      timestamps: true,
      paranoid: true,
      hooks: {
        beforeCreate: async user => {
          try {
            user.password = await bcrypt.hash(user.password, 10);
          } catch (err) {
            throw new Error(err);
          }
        }
      }
    }
  );

  User.isValidPassword = function(password) {
    return password.length;
  };

  User.prototype.checkPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  User.prototype.applyRole = function(role) {
    return pick(this, allowed[role]);
  };

  return User;
};
