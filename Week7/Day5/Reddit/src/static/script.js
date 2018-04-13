document.querySelector('#submitPost').addEventListener('click', (e) => {
  const inputTitle = document.querySelector('#inputTitle').value;
  const inputUrl = document.querySelector('#inputUrl').value;

  if (inputTitle !== '' && inputUrl !== '') {
    const httpRequest = new XMLHttpRequest();

    httpRequest.open('POST', '/posts');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.onload = (event) => {
      console.log(event);
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        const postsItemDiv = document.createElement('div');
        postsItemDiv.className = 'posts-item';

        const itemTitleDiv = document.createElement('div');
        itemTitleDiv.className = 'item-title';

        const titlePTag = document.createElement('p');
        titlePTag.innerText = inputTitle;

        const itemScoreDiv = document.createElement('div');
        itemScoreDiv.className = 'item-score';

        const upArrowImg = document.createElement('img');
        upArrowImg.className = 'up-arrow';
        upArrowImg.src = '../static/img/upvote.png';
        upArrowImg.alt = 'upvote';
        upArrowImg.setAttribute('data-id', JSON.parse(event.target.response).insertId);

        const itemScoreP = document.createElement('p');
        itemScoreP.className = 'scores';
        itemScoreP.innerText = 0;
        itemScoreP.setAttribute('data-id', JSON.parse(event.target.response).insertId);

        const downArrowImg = document.createElement('img');
        downArrowImg.className = 'down-arrow';
        downArrowImg.src = '../static/img/downvote.png';
        downArrowImg.alt = 'downvote';
        downArrowImg.setAttribute('data-id', JSON.parse(event.target.response).insertId);

        const itemUrlDiv = document.createElement('div');
        itemUrlDiv.className = 'item-url';

        const itemUrlATag = document.createElement('a');
        itemUrlATag.href = inputUrl;
        itemUrlATag.target = '_blank';
        itemUrlATag.innerText = `Link: ${inputUrl}`;

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
        document.querySelector('#inputUrl').value = 'http://';
      }
    };

    httpRequest.send(JSON.stringify({
      title: inputTitle,
      url: inputUrl,
    }));
  }
  e.preventDefault();
});

document.querySelector('#deletePost').addEventListener('click', (event) => {
  const httpRequest = new XMLHttpRequest();
  const deleteTitle = document.querySelector('#deleteTitle').value;

  httpRequest.open('DELETE', '/delete');
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.onload = () => {
    document.querySelectorAll('.posts-item').forEach((e) => {
      if (e.querySelector('p').innerText === deleteTitle) {
        e.parentNode.removeChild(e);
      }
    });
    document.querySelector('#deleteTitle').value = '';
  };

  httpRequest.send(JSON.stringify({
    title: document.querySelector('#deleteTitle').value,
  }));
  event.preventDefault();
});

document.querySelectorAll('.up-arrow').forEach((event) => {
  event.addEventListener('click', (e) => {
    const httpRequest = new XMLHttpRequest();

    httpRequest.open('PUT', `/posts/${e.target.dataset.id}/upvote`);
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    httpRequest.onload = () => {
      e.target.parentNode.childNodes[3].innerText = parseInt(e.target.parentNode.childNodes[3].innerText) + 1;
    };

    httpRequest.send(JSON.stringify({
      id: document.querySelector('.up-arrow'),
    }));
    e.preventDefault();
  });
});

document.querySelectorAll('.down-arrow').forEach((event) => {
  event.addEventListener('click', (e) => {
    const httpRequest = new XMLHttpRequest();

    httpRequest.open('PUT', `/posts/${e.target.dataset.id}/downvote`);
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    httpRequest.onload = () => {
      e.target.parentNode.childNodes[3].innerText = parseInt(e.target.parentNode.childNodes[3].innerText) - 1;
    };

    httpRequest.send(JSON.stringify({
      id: document.querySelector('.down-arrow'),
    }));
    e.preventDefault();
  });
});
