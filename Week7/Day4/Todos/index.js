const express = require('express');
const app = express();
const PORT = (3000);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('home', {
    string: 'Things to do today: ',
    todos,
  });
});