'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it
  request(app)
    .get('/groot/?message=Hello!')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
      received: 'Hello!',
      translated: 'I am Groot!'
    })
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(400)
    .expect({
      error: 'I am Groot!'
    })
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/yondu/?distance=100.0&time=5.0')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
      distance: "100.0",
      time: "5.0",
      Speed: 20
    })
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/yondu/?distance=100.0&time=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .expect({
      error: "I am Groot!"
    })
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/rocket')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
      caliber25: 0,
      caliber30: 0,
      caliber50: 0,
      shipstatus: "empty",
      ready: false
    })
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/rocket/fill/?caliber=.50&amount=12500')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
      received: ".50",
      amount: "12500",
      shipstatus: "Full!",
      ready: true
    })
    .end((err, res) => {
      t.error(err);
    });

  request(app)
    .get('/rocket/fill/')
    .expect('Content-Type', /json/)
    .expect(400)
    .expect({
      error: "I am Groot!"
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
