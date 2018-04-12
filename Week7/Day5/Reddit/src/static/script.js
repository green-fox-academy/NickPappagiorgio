document.querySelector('#submitPost').addEventListener('click', (e) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.open('POST', 'http://localhost:3000/posts');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.onload = (event) => {

    const title = document.querySelector('#inputTitle').value;
    const url = document.querySelector('#inputUrl').value;

    const postsItemDiv = document.createElement('div');
    postsItemDiv.className = 'posts-item';

    const itemTitleDiv = document.createElement('div');
    itemTitleDiv.className = 'item-title';

    const titleHTag = document.createElement('h1');
    titleHTag.innerText = title;

    const itemScoreDiv = document.createElement('div');
    itemScoreDiv.className = 'item-score';
    itemScoreDiv.innerText = 0;

    const itemUrlDiv = document.createElement('div');
    itemUrlDiv.className = 'item-url';

    const itemUrlATag = document.createElement('a');
    itemUrlATag.href = url;
    itemUrlATag.target = '_blank';
    itemUrlATag.innerText = url;

    const itemDateDiv = document.createElement('a');
    itemDateDiv.className = 'item-date';
    itemDateDiv.innerText = event.timeStamp;



    postsItemDiv.appendChild(itemTitleDiv);
    itemTitleDiv.appendChild(titleHTag)
    postsItemDiv.appendChild(itemScoreDiv);
    postsItemDiv.appendChild(itemUrlDiv);
    itemUrlDiv.appendChild(itemUrlATag);
    postsItemDiv.appendChild(postsItemDiv);
    







    const itemDateDiv = document.createElement('div');
    itemDateDiv.className = 'item-date';

    document.querySelector('#inputTitle').value = '';
    document.querySelector('#inputUrl').value = '';
  };

  httpRequest.send(JSON.stringify({
    title: document.querySelector('#inputTitle').value,
    url: document.querySelector('#inputUrl').value,
  }));
  e.preventDefault();
});
