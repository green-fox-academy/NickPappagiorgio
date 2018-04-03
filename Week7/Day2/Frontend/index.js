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
      appended: word + 'a',
    });
  }
});

app.post('/dountil/:what', (req, res) => {
  const number = req.body.until;
  const what = req.params.what;
  if (what === undefined) {
    res.json({
      error: "Please provide a number!",
    });
  } else if (what === 'sum') {
    res.json({
      result: number * (number + 1) / 2,
    });
  } else if (what === 'factor') {
    var fact = 1;
    if (number === 0) {
      fact = 1;
    } else {
      for (var i = 1; i <= number; i++) {
        fact = fact * i;
      }
    };
    res.json({
      result: fact,
    });
  }
});

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const array = req.body.numbers;

  if (what === undefined) {
    res.json({
      error: "Please provide what to do with the numbers!"
    });
  } else if (what === "sum") {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
    res.json({
      result: result,
    });
  } else if (what === "multiply") {
    var result = 1;
    for (var i = 0; i < array.length; i++) {
      result *= array[i];
    }
    res.json({
      result: result,
    });
  } else if (what === "double") {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(array[i] * 2);
    }
    res.json({
      result: result,
    });
  }
});

app.post('/sith', (req, res) => {

  if (req.body.text === undefined) {
    res.json({
      error: "Feed me some text you have to, padawan young you are. Hmmm.",
    });
  }

  const text = `${req.body.text.toLowerCase()} `;
  const textArray = text.split('. ');
  const newTextArray = [];

  for (var i = 0; i < textArray.length - 1; i++) {
    newTextArray.push(textArray[i].split(' '));
  }

  var string = "";
  for (var i = 0; i < newTextArray.length; i++) {
    for (var j = 0; j < newTextArray[i].length; j += 2) {
      if (newTextArray[i][j + 1] !== undefined) {
        string += newTextArray[i][j + 1] + " ";
        string += newTextArray[i][j] + " ";
        if (newTextArray[i].length - 1 <= j) {
          string = string.slice(0, -1);
        }
      } else {
        string += newTextArray[i][j] + " ";
        if (newTextArray[i].length - 1 <= j) {
          string = string.slice(0, -1);
        }
      }
    } string += ". ";
  }

  res.json({
    result: string,
  });
});