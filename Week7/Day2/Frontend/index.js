const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/endpoint', (req, res) => {
  console.log(req.body);
  //res.end()
  res.json({
    message: 'OK',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/assets', express.static('assets'));

app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      error: "Please provide an input!"
    })
  } else {
    res.json({
      received: req.query.input,
      result: req.query.input * 2
    })
  }
});

app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;
  if (name === undefined) {
    res.json({
      error: "Please provide a name!"
    });
  } else if (title === undefined) {
    res.json({
      error: "Please provide a title!"
    });
  } else {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  }
});

app.get('/appenda/:appended', (req, res) => {
  const word = req.params.appended;
  if (word === undefined) {
    res.status(404);
  } else {
    res.json({
      appended: word + 'a'
    });
  }
});