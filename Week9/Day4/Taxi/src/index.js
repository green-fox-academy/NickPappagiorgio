require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

const conn = mysql.createConnection({
  socketPath: '/tmp/mysql.sock',
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

/*
app.get('/', (req, res) => {
  const sql = 'SELECT * from cars;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).send();
      return;
    }
    res.render('index', {
      cars: rows,
    });
  });
});
*/

app.get('/', (req, res) => {
  let sql = 'SELECT * from cars;';
  let queryInputs = [];

  if (req.query.company !== undefined) {
    sql = 'SELECT * from cars WHERE company = ?;';
    queryInputs = [req.query.company];
  }

  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).send();
      return;
    }

    res.render('index', {
      cars: rows,
    });
  });
});

app.get('/api/cars', (req, res) => {
  const sql = 'SELECT * from cars;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }

    res.json(rows);
  });
});

app.get('/api/companies', (req, res) => {
  const sql = 'SELECT DISTINCT company from cars;';
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }

    res.json(rows.map(row => (row.company)));
  });
});

app.post('/api/cars', (req, res) => {
  const {
    company, licencePlate, capacity, price,
  } = req.body;

  if (
    company === undefined || company === '' ||
    licencePlate === undefined || licencePlate === '' ||
    capacity === undefined || capacity === '' ||
    price === undefined || price === ''
  ) {
    res.status(400).json({
      message: 'All fileds are require.',
    });
    return;
  }

  const sql = `
    INSERT INTO cars (company, licence_plate, capacity, price)
    VALUES (?, ?, ?, ?);
  `;
  conn.query(sql, [company, licencePlate, capacity, price], (err, result) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }

    res.json({
      message: 'New car successfully created.',
      insertedId: result.insertId,
    });
  });
});

app.post('/api/test', (req, res) => {
  res.json({
    message: 'Test response.',
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`); // eslint-disable-line
});
