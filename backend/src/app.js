const express = require('express');
const { loginRoute, patientRoute } = require('./routes');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use(authMiddleware);
app.use('/patients', patientRoute);

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado: ${err.message}` });
});

module.exports = app;
