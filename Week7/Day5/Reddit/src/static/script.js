document.querySelector('#submitPost').addEventListener('click', (e) => {
  const title = document.querySelector('#inputTitle').value;
  const url = document.querySelector('#inputUrl').value;

  if (title !== '' && url !== '') {
    const httpRequest = new XMLHttpRequest();

    httpRequest.open('POST', 'http://localhost:3000/posts');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.onload = (event) => {
      console.log(event);
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        const postsItemDiv = document.createElement('div');
        postsItemDiv.className = 'posts-item';

        const itemTitleDiv = document.createElement('div');
        itemTitleDiv.className = 'item-title';

        const titlePTag = document.createElement('p');
        titlePTag.innerText = title;

        const itemScoreDiv = document.createElement('div');
        itemScoreDiv.className = 'item-score';

        const upArrowImg = document.createElement('img');
        upArrowImg.className = 'up-arrow';
        upArrowImg.src = '../static/img/upvote.png';
        upArrowImg.alt = 'upvote';
        upArrowImg.data-id = event.target.response.insertId;

        const itemScoreP = document.createElement('p');
        itemScoreP.innerText = 0;

        const downArrowImg = document.createElement('img');
        downArrowImg.className = 'down-arrow';
        downArrowImg.src = '../static/img/downvote.png';
        downArrowImg.alt = 'downvote';
        downArrowImg.setAttribute('data-id', event.target.response.insertId);

        const itemUrlDiv = document.createElement('div');
        itemUrlDiv.className = 'item-url';

        const itemUrlATag = document.createElement('a');
        itemUrlATag.href = url;
        itemUrlATag.target = '_blank';
        itemUrlATag.innerText = `Link: ${url}`;

        const itemDateDiv = document.createElement('div');
        itemDateDiv.className = 'item-date';
        itemDateDiv.innerText = `The post has been created: ${event.timeStamp}`;

        postsItemDiv.appendChild(itemTitleDiv);
        itemTitleDiv.appendChild(titlePTag);
        itemScoreDiv.appendChild(upArrowImg);
        itemScoreDiv.appendChild(itemScoreP);
        itemScoreDiv.appendChild(downArrowImg);
        postsItemDiv.appendChild(itemScoreDiv);
        postsItemDiv.appendChild(itemUrlDiv);
        itemUrlDiv.appendChild(itemUrlATag);
        postsItemDiv.appendChild(itemDateDiv);
        document.querySelector('#posts').appendChild(postsItemDiv);

        document.querySelector('#inputTitle').value = '';
        document.querySelector('#inputUrl').value = '';
      }
    };

    httpRequest.send(JSON.stringify({
      title: document.querySelector('#inputTitle').value,
      url: document.querySelector('#inputUrl').value,
    }));
  }
  e.preventDefault();
});

document.querySelector('#deletePost').addEventListener('click', (e) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.open('DELETE', 'http://localhost:3000/delete');
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.onload = (event) => {
    document.querySelector('#deleteTitle').value = '';
  };

  httpRequest.send(JSON.stringify({
    title: document.querySelector('#deleteTitle').value,
  }));
  e.preventDefault();
});
/////////////////////////////////////////////////////////////////////////////////
document.querySelector('.up-arrow').addEventListener('click', (e) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.open('DELETE', 'http://localhost:3000/delete');
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.onload = (event) => {

    document.querySelector('#deleteTitle').value = '';
  };

  httpRequest.send(JSON.stringify({
    title: document.querySelector('#deleteTitle').value,
  }));
  e.preventDefault();
});
