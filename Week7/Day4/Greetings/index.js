const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  let name = req.query.name || 'Guest';
  res.render('home', {
    string: `${ name }`,
  });
});
