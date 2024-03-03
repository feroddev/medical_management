const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado: ${err.message}` });
});

module.exports = app;
