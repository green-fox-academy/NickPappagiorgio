const submitButton = document.querySelector('#form-submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = document.querySelector('form');
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.open('POST', '/api/history');
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      const historyItem = document.createElement('div');
      historyItem.className = 'history-item';

      const itemTitle = document.createElement('div');
      itemTitle.className = 'item-title';
      itemTitle.innerText = formData.elements.title.value;
      historyItem.appendChild(itemTitle);

      const itemPrice = document.createElement('div');
      itemPrice.className = 'item-price';
      itemPrice.innerText = formData.elements.price.value;
      historyItem.appendChild(itemPrice);

      const itemDate = document.createElement('div');
      itemDate.className = 'item-date';
      itemDate.innerText = formData.elements.date.value;
      historyItem.appendChild(itemDate);

      const history = document.querySelector('#history');
      history.appendChild(historyItem);


      formData.elements.title.value = '';
      formData.elements.price.value = '';
      formData.elements.type.value = 0;
      formData.elements.date.value = '';
    }
  };

  xmlhttp.send(JSON.stringify({
    title: formData.elements.title.value,
    price: formData.elements.price.value,
    type: formData.elements.type.value,
    date: formData.elements.date.value,
  }));
});

const renderTypes = () => {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', '/api/types');
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      const data = JSON.parse(xmlhttp.response);
      const typeSelector = document.querySelector('#type-selector');
      for (let i = 0; i < data.length; i += 1) {
        const opt = document.createElement('option');
        opt.value = data[i].id;
        opt.innerHTML = data[i].title;
        typeSelector.appendChild(opt);
      }
    }
  };

  xmlhttp.send();
};

renderTypes();