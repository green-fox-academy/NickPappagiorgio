'use strict';

let allImage = document.querySelectorAll('.img');
let counter = 0;

let imgUrls = [
  {
    src: 'img/gallery/deadpool.jpg',
    label: 'Deadpool',
    lead:
      'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.'
  },
  {
    src: 'img/gallery/fear-and-loathing-in-las-vegas.jpg',
    label: 'Fear and Loathing in Las Vegas',
    lead:
      'An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.'
  },
  {
    src: 'img/gallery/guardians-of-the-galaxy-vol-2.jpg',
    label: 'Guardians of the Galaxy Vol. 2',
    lead:
      "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage."
  },
  {
    src: 'img/gallery/interstellar.jpg',
    label: 'Interstellar',
    lead:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    src: 'img/gallery/leon-the-professional.jpg',
    label: 'Léon: The Professional',
    lead:
      "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade."
  },
  {
    src: 'img/gallery/mad-max-fury-road.jpg',
    label: 'Mad Max: Fury Road',
    lead:
      'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.'
  },
  {
    src: 'img/gallery/star-trek-beyond.jpg',
    label: 'Star Trek: Beyond',
    lead:
      'The crew of the USS Enterprise explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy, who puts them, and everything the Federation stands for, to the test.'
  },
  {
    src: 'img/gallery/the-dark-knight.jpg',
    label: 'The Dark Knight',
    lead:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
  },
  {
    src: 'img/gallery/the-fifth-element.jpg',
    label: 'The Fifth Element',
    lead:
      'In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.'
  },
  {
    src: 'img/gallery/death-proof.jpg',
    label: 'Death Proof',
    lead:
      'Two separate sets of voluptuous women are stalked at different times by a scarred stuntman who uses his "death proof" cars to execute his murderous plans.'
  },
  {
    src: 'img/gallery/the-wolf-of-wall-street.jpg',
    label: 'The Wolf of Wall Street',
    lead:
      'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.'
  }
];

function select(what) {
  return document.querySelector(what);
}

select('.rightArrow').addEventListener('click', next);
select('.leftArrow').addEventListener('click', back);
document.addEventListener('keyup', e => {
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
  select('.mainPic').setAttribute('src', allImage[counter].getAttribute('src'));
  select('.label').innerText = imgUrls[counter].label;
  select('.lead').innerText = imgUrls[counter].lead;
  allImage[counter - 1].setAttribute('style', 'opacity: 0.6;');
}

function back() {
  if (counter === 0) {
    counter = allImage.length;
    allImage[0].setAttribute('style', 'opacity: 0.6;');
  }
  counter--;
  allImage[counter].setAttribute('style', 'opacity: 1;');
  select('.mainPic').setAttribute('src', allImage[counter].getAttribute('src'));
  select('.label').innerText = imgUrls[counter].label;
  select('.lead').innerText = imgUrls[counter].lead;
  allImage[counter + 1].setAttribute('style', 'opacity: 0.6;');
}

allImage.forEach((e, i) => {
  e.addEventListener('click', jump(e, i));
});

function jump(element, index) {
  return function() {
    select('.mainPic').setAttribute('src', event.target.currentSrc);
    element.setAttribute('style', 'opacity: 1;');
    allImage[counter].setAttribute('style', 'opacity: 0.6;');
    counter = index;
    select('.label').innerText = imgUrls[counter].label;
    select('.lead').innerText = imgUrls[counter].lead;
  };
}
