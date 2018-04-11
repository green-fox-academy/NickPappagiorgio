const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Dashboard',
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
