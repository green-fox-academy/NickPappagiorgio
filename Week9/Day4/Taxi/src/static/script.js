function getCompanies() {
  const xml = new XMLHttpRequest();
  xml.open('GET', '/api/companies');
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.onload = () => {
    const response = JSON.parse(xml.response);
    const companySelector = document.querySelector('#company-selector');
    companySelector.innerHTML = '';

    const allOption = document.createElement('option');
    allOption.innerText = 'All';
    allOption.value = 'all';
    companySelector.appendChild(allOption);

    response.forEach((company) => {
      const option = document.createElement('option');
      option.innerText = company;
      option.value = company;
      companySelector.appendChild(option);
    });

    const currentURL = new URL(window.location.href);
    const selectedCompany = currentURL.searchParams.get('company');
    if (selectedCompany !== null) {
      companySelector.value = selectedCompany;
    }
  };
  xml.send();
}

function submitCarForm(myForm) {
  const form = myForm;
  const xml = new XMLHttpRequest();
  xml.open('POST', '/api/cars');
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.onload = () => {
    if (xml.status === 200) {
      const response = JSON.parse(xml.response);
      const carBody = document.querySelector('#car-table-body');
      const row = document.createElement('tr');

      const companyCell = document.createElement('td');
      companyCell.innerText = form.elements.company.value;
      row.appendChild(companyCell);

      const licenceCell = document.createElement('td');
      licenceCell.innerText = form.elements.licence.value;
      row.appendChild(licenceCell);

      const capacityCell = document.createElement('td');
      capacityCell.innerText = form.elements.capacity.value;
      row.appendChild(capacityCell);

      const priceCell = document.createElement('td');
      priceCell.innerText = form.elements.price.value;
      row.appendChild(priceCell);

      carBody.appendChild(row);
      getCompanies();

      form.elements.company.value = '';
      form.elements.licence.value = '';
      form.elements.capacity.value = '';
      form.elements.price.value = '';

      // 💩
      swal({
        title: 'Good job!',
        text: response.message,
        icon: 'success',
        button: false,
        timer: 2000,
      });
    } else {
      // 💩
      swal({
        title: 'Ohhh no!',
        text: 'Something went wrong.',
        icon: 'error',
        button: 'Sad panda',
      });
    }
  };
  xml.send(JSON.stringify({
    company: form.elements.company.value,
    licencePlate: form.elements.licence.value,
    capacity: form.elements.capacity.value,
    price: form.elements.price.value,
  }));
}

window.onload = () => {
  getCompanies();

  document.querySelector('#company-selector').addEventListener('change', (e) => {
    window.location = e.target.value === 'all' ? '/' : `/?company=${e.target.value}`;
  });

  document.querySelector('#car-form').addEventListener('submit', (e) => {
    e.preventDefault();
    submitCarForm(e.target);
  });
};
