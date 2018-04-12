const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'batman',
  database: 'reddit',
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, result) => {
    if (err) {
      res.satus(500).send('Database error');
    }
    res.json(result);
  });
});

app.post('/posts', (req, res) => {
  const inputTitle = req.body.title;
  const inputUrl = req.body.url;
  if (inputTitle === undefined || inputUrl === undefined) {
    res.json({ error: 'Please provide all data what is needed.' });
  } else {
    const newPosts = { title: inputTitle, url: inputUrl };
    conn.query('INSERT INTO posts SET ?', newPosts, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }
});

app.put('/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${req.params.id};`, (err, result) => {
    if (err) {
      res.status(500).send('Database error');
    } else {
      res.json(result);
    }
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${req.params.id};`, (err, result) => {
    if (err) {
      res.status(500).send('Database error');
    } else {
      res.json(result);
    }
  });
});

app.delete('/posts/:id', (req, res) => {
  conn.query(`DELETE FROM posts WHERE id = ${req.params.id};`, (err, result) => {
    if (err) {
      res.status(500).send('Database error');
    } else {
      res.json(result);
    }
  });
});

app.put('/posts/:id', (req, res) => {
  const inputTitle = req.body.title;
  const inputUrl = req.body.url;
  if (inputTitle === undefined || inputUrl === undefined) {
    res.json({ error: 'Please provide all data what is needed.' });
  } else {
    conn.query(`UPDATE posts SET title = '${inputTitle}', url = '${inputUrl}' WHERE id = ${req.params.id};`, (err, result) => {
      if (err) {
        res.status(500).send('Database error');
      } else {
        res.json(result);
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
