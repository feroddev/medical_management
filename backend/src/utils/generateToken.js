const jwt = require('jsonwebtoken');

module.exports = (user) => {
  const token = jwt.sign({ 
    sub: user.id,
    role: user.role,
  }, process.env.JWT_SECRET, { 
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return { token };
};