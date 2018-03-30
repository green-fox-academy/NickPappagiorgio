'use strict';

let allImage = document.querySelectorAll('.img');
let counter = 0;

let imgUrls =[
  { src: 'img/gallery/deadpool.jpg', label: 'Deadpool', lead: ''},
  { src: 'img/gallery/fear-and-loathing-in-las-vegas.jpg', label: 'Fear and Loathing in Las Vegas', lead: ''},
  { src: 'img/gallery/guardians-of-the-galaxy-vol-2.jpg', label: 'Guardians of the Galaxy Vol. 2', lead: ''},
  { src: 'img/gallery/interstellar.jpg', label: 'Interstellar', lead: ''},
  { src: 'img/gallery/leon-the-professional.jpg', label: 'Léon: The Professional', lead: ''},
  { src: 'img/gallery/mad-max-fury-road.jpg', label: 'Mad Max: Fury Road', lead: ''},
  { src: 'img/gallery/star-trek-beyond.jpg', label: 'Star Trek: Beyond', lead: ''},
  { src: 'img/gallery/the-dark-knight.jpg', label: 'The Dark Knight', lead: ''},
  { src: 'img/gallery/the-fifth-element.jpg', label: 'The Fifth Element', lead: ''},
  { src: 'img/gallery/death-proof.jpg', label: 'Death Proof', lead: ''},
  { src: 'img/gallery/the-wolf-of-wall-street.jpg', label: 'The Wolf of Wall Street', lead: ''},
];

document.querySelector('.rightArrow').addEventListener('click', next);
document.querySelector('.leftArrow').addEventListener('click', back);
document.addEventListener('keyup', (e) => {
  if (e.keyCode === 37) {
    back();
  } else if (e.keyCode === 39) {
    next();
  }
});

function next() {
  counter++;
  if (counter === allImage.length) {
    counter = 0;
    allImage[allImage.length - 1].setAttribute('style', 'opacity: 0.6;');
  }
  allImage[counter].setAttribute('style', 'opacity: 1;');
  document.querySelector('.mainPic').setAttribute('src', allImage[counter].getAttribute('src'));
  allImage[counter - 1].setAttribute('style', 'opacity: 0.6;');
}

function back() {
  if (counter === 0) {
    counter = allImage.length;
    allImage[0].setAttribute('style', 'opacity: 0.6;');
  }
  counter--;
  allImage[counter].setAttribute('style', 'opacity: 1;');
  document.querySelector('.mainPic').setAttribute('src', allImage[counter].getAttribute('src'));
  allImage[counter + 1].setAttribute('style', 'opacity: 0.6;');
}

allImage.forEach((e, i) => {
  e.addEventListener('click', jump(e, i));
})

function jump(element, index) {
  return function () {
    document.querySelector('.mainPic').setAttribute('src', event.target.currentSrc);
    element.setAttribute('style', 'opacity: 1;');
    allImage[counter].setAttribute('style', 'opacity: 0.6;');
    counter = index;
  }
}
