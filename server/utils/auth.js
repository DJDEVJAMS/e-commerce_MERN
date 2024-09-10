const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
  signToken: function ({ email, role, _id }) {
    const payload = { email, role, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function ({ req }) {
    let token = req.headers.authorization || '';

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
};