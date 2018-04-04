let submitOne = document.querySelector('.submit.one');
let submitTwo = document.querySelector('.submit.two');
let yesButton = document.querySelector('input[id="yes"]');

document.querySelectorAll('.submit').forEach(e => {
  e.disabled = true;
});

let animals = document.querySelectorAll('input[name="animal"]');
animals.forEach(e => {
  e.addEventListener('click', enableButton);
});

let choice = document.querySelectorAll('input[name="choice"]');
choice.forEach(e => {
  e.addEventListener('click', enableButton);
});

function enableButton(ev) {
  let rdoId = ev.target.id;
  let choiceId = ev.target.id;
  if (rdoId === 'cat') {
    submitOne.disabled = false;
    submitTwo.disabled = false;
  } else if (rdoId === 'dog') {
    submitOne.disabled = true;
    submitTwo.disabled = false;
  } else if (choiceId === 'yes') {
    submitTwo.disabled = false;
  } else {
    submitTwo.disabled = true;
  }
}

function alertMessage() {
  alert("Thank you, you've successfully signed up for cat facts")
}

submitTwo.addEventListener('click', alertMessage);