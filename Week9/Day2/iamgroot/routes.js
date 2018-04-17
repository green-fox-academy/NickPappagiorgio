const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  if (req.query.message === undefined) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {res.json({
    received: req.query.message,
    translated: 'I am Groot!'
  });}
});

module.exports = app;
