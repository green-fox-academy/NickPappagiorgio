const quizDiv = document.querySelector('#quiz');
const scoreHtml = document.querySelector('span')
let score = 0;

function getAQuestion() {
  const XHR = new XMLHttpRequest();
  XHR.open('GET', '/game');
  XHR.setRequestHeader('Content-Type', 'application/json');
  XHR.onload = (event) => {
    const question = document.querySelector('#quiz');
    question.innerHTML = '';
    createTable(JSON.parse(event.target.response));
  }
  XHR.send();
}

fetch('/game')
  .then((response) => response.json())
  .then((myJson) => {
    
  });

function createTable(quiz) {
  let p = nodeCreator('p');
  p.className = 'question';
  p.textContent = quiz.question;
  quizDiv.appendChild(p);

  quiz.answers.forEach(e => {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerText = e.answer;
    quizDiv.appendChild(button);
  });

  let buttons = document.querySelectorAll('.button');
  scoreHtml.innerText = score;
  buttons.forEach((e, i) => {
    e.addEventListener('click', () => {
      if (quiz.answers[i].is_correct === 1) {
        score++;
        scoreHtml.innerText = score;
        getAQuestion();
      }
    });
  });
}

function nodeCreator(nodeName) {
  return document.createElement(nodeName);
}

window.onload = () => {
  getAQuestion();
}
