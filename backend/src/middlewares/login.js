const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    return res.status(400).json({
      message: 'Enter a valid email',
    });
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Incorrect email or password' });
  }

  next();
};

module.exports = validateLogin;