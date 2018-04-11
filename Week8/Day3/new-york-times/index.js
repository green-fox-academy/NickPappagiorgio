let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=86c4e50976d74bb2bc96ab155257c1f5")

httpRequest.onload = () => {
  let data = JSON.parse(httpRequest.responseText);
  console.log(data);

  let innerDiv = document.querySelector('.inner');
  let ulTag = document.createElement('ul');
  innerDiv.appendChild(ulTag);

  data.response.docs.forEach(e => {
    let h1Tag = document.createElement('h1');
    let aTag = document.createElement('a');
    let liTag = document.createElement('li');

    aTag.textContent = e.headline.main;
    aTag.href = e.web_url;
    aTag.target = '_blank'

    if (e.pub_date !== undefined) {
      liTag.textContent = `${e.snippet} Publication date is: ${e.pub_date.substring(0, 16).replace('T', ' ')}`;
    } else {
      liTag.textContent = e.snippet;
    }

    h1Tag.appendChild(aTag);
    ulTag.appendChild(h1Tag);
    ulTag.appendChild(liTag);
  });
};
httpRequest.send();
