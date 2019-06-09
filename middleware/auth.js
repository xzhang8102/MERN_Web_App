const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token found, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtToken'));
    // assign user to the request object
    req.user = decoded.user;
    // run next middleware
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
