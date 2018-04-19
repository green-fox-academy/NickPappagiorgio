const quizDiv = document.querySelector('#quiz');

function getAQuestion() {
  const XHR = new XMLHttpRequest();
  XHR.open('GET', '/game');
  XHR.setRequestHeader('Content-Type', 'application/json');
  XHR.onload = (event) => {
    //console.log(JSON.parse(event.target.response));
    createTable(JSON.parse(event.target.response));
  }
  XHR.send();
}

function createTable(quiz) {
  let p = nodeCreator('p');
  p.className = 'question';
  p.textContent = quiz.question;
  quizDiv.appendChild(p);

  let buttonOne = nodeCreator('button');
  buttonOne.className = 'button';
  buttonOne.innerText = quiz.answers[0].answer;
  eventListenerMaker(buttonOne);
  quizDiv.appendChild(buttonOne);

  let buttonTwo = nodeCreator('button');
  buttonTwo.className = 'button';
  buttonTwo.innerText = quiz.answers[1].answer;
  eventListenerMaker(buttonTwo);
  quizDiv.appendChild(buttonTwo);

  let buttonThree = nodeCreator('button');
  buttonThree.className = 'button';
  buttonThree.innerText = quiz.answers[2].answer;
  eventListenerMaker(buttonThree);
  quizDiv.appendChild(buttonThree);

  let buttonFour = nodeCreator('button');
  buttonFour.className = 'button';
  buttonFour.innerText = quiz.answers[3].answer;
  eventListenerMaker(buttonFour);
  quizDiv.appendChild(buttonFour);
}

function eventListenerMaker(button) {
  button.onclick = (event) => {
    console.log(event)
    // let postTarget = 'I Don\'t Know Yet';

    // if (event.target.textContent === "Move Here") {
    //   postTarget = 'movehere';
    // } else if (event.target.textContent === '<- To Planet') {
    //   postTarget = 'toplanet';
    // } else {
    //   postTarget = 'toship';
    // }

    // const XHR = new XMLHttpRequest;
    // XHR.open('POST', `/${postTarget}/${event.target.parentNode.parentNode.rowIndex}`);
    // XHR.onload = () => {
    //   const tbodyRows = document.querySelectorAll('tbody tr');
    //   tbodyRows.forEach(row => {
    //     tbody.removeChild(row);
    //   });
    //   getPlanets();
    // }
    // XHR.send();
  }
}

function nodeCreator(nodeName) {
  return document.createElement(nodeName);
}

window.onload = () => {
  getAQuestion();
}
