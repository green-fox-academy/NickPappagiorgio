document.querySelector('#submitPost').addEventListener('click', (e) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.open('POST', 'http://localhost:3000/posts');
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send(JSON.stringify({
    title: document.querySelector('#inputTitle').value,
    url: document.querySelector('#inputUrl').value,
  }));
  e.preventDefault();
});
