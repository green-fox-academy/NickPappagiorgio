const express = require('express');
const app = express();
const PORT = 3000;
let mysql = require('mysql');

app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'batman',
  database: 'reddit'
});

conn.connect(err => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', function (req, res) {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send({ posts: rows });
  });
});

app.post('/posts', (req, res) => {
  const title = req.body.title;
  const url = req.body.url;
  if (title === undefined || url === undefined) {
    res.json({ error: 'Please provide all data what needed.' });
  } else {
    const newPosts = { title: title, url: url };
    conn.query('INSERT INTO posts SET ?', newPosts, (err, rows) => {
      if (err) throw err;

      res.send({post: rows});
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
