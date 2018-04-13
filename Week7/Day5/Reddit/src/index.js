const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'batman',
  database: 'reddit',
});

app.get('/', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, result) => {
    if (err) {
      res.satus(500).send('Database error');
    }
    res.render('index', {
      posts: result,
    });
  });
});

app.post('/posts', (req, res) => {
  const newPosts = { title: req.body.title, url: req.body.url };
  if (req.body.title === undefined || req.body.url === undefined) {
    res.json({ error: 'Please provide all data what is needed.' });
  } else {
    conn.query('INSERT INTO posts SET ?;', newPosts, (err, result) => {
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

app.delete('/delete', (req, res) => {
  if (req.body.title === undefined) {
    res.json({ error: 'Please provide all data what is needed.' });
  } else {
    conn.query('DELETE FROM posts WHERE title = ?;', req.body.title, (err, result) => {
      if (err) {
        res.status(500).send('Database error');
      } else {
        res.json(result);
      }
    });
  }
});

app.put('/posts/:id', (req, res) => {
  const editedPosts = { title: req.body.title, url: req.body.url };
  const editedPostsArray = [editedPosts, req.params.id];
  if (req.body.title === undefined || req.body.url === undefined) {
    res.json({ error: 'Please provide all data what is needed.' });
  } else {
    conn.query('UPDATE posts SET ? WHERE id = ?;', editedPostsArray, (err, result) => {
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
