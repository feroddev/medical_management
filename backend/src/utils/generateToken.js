const jwt = require('jsonwebtoken');

module.exports = (user, tokenVerify = undefined) => {
  if (tokenVerify) {
    const decoded = jwt.verify(tokenVerify, process.env.JWT_SECRET);
    return decoded;
  }

  const token = jwt.sign({ 
    sub: user.id,
    role: user.role,
  }, process.env.JWT_SECRET, { 
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return { token };
};