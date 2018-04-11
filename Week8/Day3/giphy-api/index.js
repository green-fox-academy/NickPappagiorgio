let httpRequest = new XMLHttpRequest();

function show() {
  let text = document.querySelector('input').value;
  let imagesDiv = document.querySelector('.images');

  httpRequest.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=sTxcImcRafvurRWsq6Rgf79T8kMeRvsZ&q=${text}&limit=16&offset=0&rating=R&lang=en`, true);
  
  while (imagesDiv.firstChild !== null) {
    imagesDiv.removeChild(imagesDiv.firstChild);
  }
  
  httpRequest.onload = () => {
    let response = JSON.parse(httpRequest.responseText);
    console.log(response)
    for (let i = 0; i < response.data.length; i++) {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        let imgTag = document.createElement('img');
        imgTag.src = response.data[i].images.fixed_width_still.url;
        document.querySelector('.images').appendChild(imgTag);
        imgTag.setAttribute('width', '25%');

        imgTag.addEventListener('click', gif);
        function gif() {
          imgTag.src = response.data[i].images.fixed_width.url;
        }
      }
    }
  };
  httpRequest.send();
}

document.querySelector('button').addEventListener('click', show);
