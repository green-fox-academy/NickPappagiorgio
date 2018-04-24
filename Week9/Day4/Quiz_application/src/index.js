const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'batman',
  database: 'quiz'
});

app.use(express.json());
app.use('/static', express.static(__dirname + '/static'));
app.set('/views', (__dirname + '/views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/game', (req, res) => {
  conn.query(`SELECT * FROM questions ORDER BY RAND() LIMIT 1;`, (err, questions) => {
    if (err) {
      res.status(500).json({
        error: 'Wrong request',
      });
    } else {
      conn.query(`SELECT * FROM answers WHERE question_id = ${questions[0].id};`, (err, answers) => {
        if (err) {
          res.status(500).json({
            error: 'Wrong request',
          });
        } else {
          questions[0].answers = answers;
          res.json(questions[0]);
        }
      });
    }
  })
});

app.get('/questions', (req, res) => {
  conn.query(`SELECT * FROM questions;`, (err, response) => {
    if (err) {
      res.status(500).json({
        error: 'Wrong request',
      });
    } else {
      res.json(response);
    }
  });
});

app.post('/questions', (req, res) => {
  if (req.body.question === undefined || req.body.question === '') {
    res.status(500).json({
      error: 'Wrong request',
    });
  } else {
    conn.query(`INSERT INTO questions VALUES(NULL,?);`, req.body.question, (err, response) => {
      if (err) {
        res.status(500).json({
          error: 'Wrong request',
        });
      } else {
        let newAnswer = [response.insertId, req.body.answerOne, req.body.isCorrectOne,
        response.insertId, req.body.answerTwo, req.body.isCorrectTwo,
        response.insertId, req.body.answerThree, req.body.isCorrectThree,
        response.insertId, req.body.answerFour, req.body.isCorrectFour];

        conn.query(`INSERT INTO answers VALUES(NULL,?,?,?),(NULL,?,?,?),(NULL,?,?,?),(NULL,?,?,?);`, newAnswer, (err, response) => {
          if (err) {
            res.status(500).json({
              error: 'Wrong request',
            });
          } else {
            res.json({
              message: 'Everything went ok!',
            })
          }
        });
      }
    })
  };
});

app.delete('/questions/:id', (req, res) => {
  conn.query(`DELETE FROM answers WHERE question_id = ${req.params.id};`, (err, response) => {
    if (err) {
      res.status(500).json({
        error: 'Wrong request',
      });
    } else {
      conn.query(`DELETE FROM questions WHERE id = ${req.params.id};`, (err, response) => {
        if (err) {
          res.status(500).json({
            error: 'Wrong request',
          });
        } else {
          res.json({
            message: 'Everything went ok!',
          })
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
