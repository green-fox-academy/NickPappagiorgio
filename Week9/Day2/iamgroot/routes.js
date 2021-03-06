const express = require('express');
const app = express();

let ship = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false
}

let food = [{
  name: 'Hamburger',
  amount: 5,
  calorie: 666,
}, {
  name: 'HotDog',
  amount: 11,
  calorie: 404,
}, {
  name: 'Pizza',
  amount: 2,
  calorie: 1111,
}]

app.get('/groot', (req, res) => {
  if (req.query.message === undefined) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {
    res.json({
      received: req.query.message,
      translated: 'I am Groot!'
    });
  }
});

app.get('/yondu', (req, res) => {
  if (parseInt(req.query.time) === 0) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {
    res.json({
      distance: req.query.distance,
      time: req.query.time,
      Speed: req.query.distance / req.query.time
    })
  };
});

app.get('/rocket', (req, res) => {
  res.json(ship);
});

app.get('/rocket/fill', (req, res) => {
  if (req.query.caliber === undefined || req.query.amount === undefined) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {
    if (req.query.caliber === '.25') {
      ship.caliber25 += parseInt(req.query.amount);
    } else if (req.query.caliber === '.30') {
      ship.caliber30 += parseInt(req.query.amount);
    } else if (req.query.caliber === '.50') {
      ship.caliber50 += parseInt(req.query.amount);
    };

    let totalAmmo = ship.caliber25 + ship.caliber30 + ship.caliber50;
    ship.shipstatus = `${((totalAmmo) * 100) / 12500}%`;
    if (ship.shipstatus === '100%') {
      ship.shipstatus = 'Full!'
    } else if (parseInt(ship.shipstatus) > 100) {
      ship.shipstatus = 'Overloaded!'
    };
    ship.ready = parseInt(totalAmmo) === 12500;

    res.json({
      received: req.query.caliber,
      amount: req.query.amount,
      shipstatus: ship.shipstatus,
      ready: ship.ready,
    })
  };
});

app.get('/drax', (req, res) => {
  res.json(food)
});

app.get('/drax/add', (req, res) => {
  let name = req.query.name;
  let amount = parseInt(req.query.amount);
  let calorie = parseInt(req.query.calorie);

  let newFood = { name, amount, calorie };
  food.push(newFood);
  res.json(food)
});

app.get('/drax/remove/:foodId', (req, res) => {
  let removableFood = req.params.foodId;
  if (isNaN(removableFood)) {
    res.status(400).json({
      error: 'I am Groot!'
    });
  } else {
    food.splice((removableFood - 1), 1);
    res.json(food)
  }
});

app.get('**', (req, res) => {
  res.status(400).json({
    error: 'Not found!'
  });
});

module.exports = app;
