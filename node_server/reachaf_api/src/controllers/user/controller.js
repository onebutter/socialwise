import jwt from 'jsonwebtoken';
import models from 'models';
const User = models.User;

//add namecard functionality

export const getUsers = async (req, res) => {
  try {
    const secret = req.app.get('jwt-secret');
    const headerAuths = req.headers.authorization.split(' ');
    if (headerAuths[0] !== 'Bearer') {
      throw new Error('Authorization Header type must be Bearer');
    }
    const { id } = jwt.verify(headerAuths[1], secret);
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const createUser = async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    res.statusCode = 201;
    res.json(createdUser);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
