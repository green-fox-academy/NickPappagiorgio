const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  if (req.query.message === undefined) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {
    res.json({
      received: req.query.message,
      translated: 'I am Groot!'
    });
  }
});

app.get('/yondu', (req, res) => {
  // TODO: implement this method
  if (parseInt(req.query.time) === 0) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {
    res.json({
      distance: req.query.distance,
      time: req.query.time,
      Speed: req.query.distance / req.query.time
    })
  };
});

module.exports = app;
