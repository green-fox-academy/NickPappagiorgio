const mainDiv = document.querySelector('#quiz');

function getAQuestion() {
  const XHR = new XMLHttpRequest();
  XHR.open('GET', '/game');
  XHR.setRequestHeader('Content-Type', 'application/json');
  XHR.onload = (event) => {
    console.log(JSON.parse(event.target.response).question);
    console.log(JSON.parse(event.target.response).answers[0].answer);
    console.log(JSON.parse(event.target.response).answers[1].answer);
    console.log(JSON.parse(event.target.response).answers[2].answer);
    console.log(JSON.parse(event.target.response).answers[3].answer);
    createTable(JSON.parse(event.target.response));
  }
  XHR.send();
}

function createTable(quiz) {
  let p = nodeCreator('p');
  p.className = 'question';
  p.textContent = quiz.question;
  div.appendChild(p);

  let buttonOne = nodeCreator('button');
  buttonOne.className = 'button';
  buttonOne.innerText = quiz.answers[0].answer;
  div.appendChild(buttonOne);

  let buttonTwo = nodeCreator('button');
  buttonTwo.className = 'button';
  buttonTwo.innerText = quiz.answers[1].answer;
  div.appendChild(buttonTwo);

  let buttonThree = nodeCreator('button');
  buttonThree.className = 'button';
  buttonThree.innerText = quiz.answers[2].answer;
  div.appendChild(buttonThree);

  let buttonFour = nodeCreator('button');
  buttonFour.className = 'button';
  buttonFour.innerText = quiz.answers[3].answer;
  div.appendChild(buttonFour);

  mainDiv.appendChild(div);
}

function nodeCreator(nodeName) {
  return document.createElement(nodeName);
}

window.onload = () => {
  getAQuestion();
}
