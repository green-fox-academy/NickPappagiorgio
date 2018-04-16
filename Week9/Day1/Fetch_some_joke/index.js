document.querySelector('button').addEventListener('click', () => {
  return fetch(`http://api.icndb.com/jokes/random`)
    .then(res => res.json())
    .then(res => {
      document.querySelector('div')
        .appendChild(document.createElement('p'))
        .textContent = res.value.joke;
        console.log(res);
    });
});
