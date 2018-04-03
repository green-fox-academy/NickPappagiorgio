const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/Hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'Guest';
  res.json({
    messege: `Hello ${name}!`
  });
});

const mentors = [
  { name: 'Istvan', age: 30 },
  { name: 'Bence', age: 42 },
  { name: 'Balazs', age: 27 }
];

app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId - 1];

  if (mentor === undefined) {
    res.status(404);
    res.json({
      messege: `No mentor with id ${req.params.mentorId}`
    });
  } else {
    res.json(mentor);
  }

});

const listMentors = (req, res) => {
  //READ DATAS FROM DATABASE
  res.json(mentors);
};

app.get('/api/mentors', listMentors);