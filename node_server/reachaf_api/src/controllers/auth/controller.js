import pick from 'lodash/pick';
import models from 'models';
import jwt from 'jsonwebtoken';
const { User } = models;

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!User.isValidPassword(password)) {
      return res.status(400).json({
        message: 'password needs to be more secure'
      });
    }
    const count = await User.count({ where: { username } });
    if (count) {
      return res.status(400).json({
        message: `username: ${username} already exists`
      });
    }
    await User.create(req.body);
    res.status(201).json({
      message: `username: '${username}' is successfully created`
    });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({
        message: `username: ${username} not found`
      });
    }
    const verified = await user.checkPassword(password);
    if (!verified) {
      return res.status(400).json({
        message: 'password is incorrect'
      });
    }
    const secret = req.app.get('jwt-secret');
    const userForToken = pick(user, ['id', 'username']);
    const token = jwt.sign(userForToken, secret, {
      expiresIn: '1d',
      issuer: 'reachaf',
      subject: 'userInfo'
    });
    user = user.applyRole('user');
    res.json({
      user,
      auth: { token }
    });
  } catch (err) {
    console.log('Auth', err);
    res.status(err.status || 500);
    res.json(err);
  }
};
