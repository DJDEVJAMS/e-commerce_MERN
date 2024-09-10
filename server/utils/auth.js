<<<<<<< HEAD
const jwt = require('jsonwebtoken'); // import jsonwebtoken for creating token
const secret = 'mysecretsshhhhh'; // secret for signing JWT
const expiration = '2h'; // token expires in 2 hours

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
=======
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
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
    }

    if (!token) {
      return req;
    }

    try {
<<<<<<< HEAD
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
=======
      const { data } = jwt.verify(token, secret);
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
<<<<<<< HEAD
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
=======
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
};
