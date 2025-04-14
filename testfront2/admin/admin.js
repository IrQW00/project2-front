const fakeRequests = [
    {
      fullName: "Иванов Иван Иванович",
      snils: "123-456-789 00",
      birthDate: "01.01.2000",
      faculty: "Факультет математики",
      group: "МТ-101",
      email: "ivanov@example.com",
      phone: "+7 900 123-45-67",
      type: "Справка студента",
      copies: 2,
      place: "по месту требования",
      date: "05.04.2025"
    },
    {
      fullName: "Петрова Анна Сергеевна",
      snils: "321-654-987 11",
      birthDate: "12.05.2001",
      faculty: "Факультет экономики",
      group: "ЭуК-202",
      email: "petrova@example.com",
      phone: "8 901 222-33-44",
      type: "Справка об обучении",
      copies: 1,
      place: "по месту требования",
      date: "01.04.2025"
    },
    {
      fullName: "Сидоров Алексей Петрович",
      snils: "111-222-333 44",
      birthDate: "10.09.1999",
      faculty: "Факультет физики",
      group: "ФИ-303",
      email: "sidorov@example.com",
      phone: "+7 902 555-66-77",
      type: "Справка студента",
      copies: 1,
      place: "по месту требования",
      date: "03.04.2025"
    }
  ];
  
  const requestsBody = document.getElementById('requests-body');
  const archiveBody = document.getElementById('archive-body');
  
  function switchAdminTab(tab) {
    document.querySelectorAll('.tab-content').forEach(tabEl => tabEl.style.display = 'none');
    document.getElementById(`${tab}-tab`).style.display = 'block';
  
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-button[onclick="switchAdminTab('${tab}')"]`).classList.add('active');
  }
  
  function renderRequests() {
    requestsBody.innerHTML = '';
  
    fakeRequests.forEach((request, index) => {
      const row = document.createElement('tr');
  
      const fioCell = document.createElement('td');
      fioCell.innerText = request.fullName;
      fioCell.classList.add('clickable');
      fioCell.style.cursor = 'pointer';
  
      const snilsCell = document.createElement('td');
      snilsCell.innerText = request.snils;
  
      const statusCell = document.createElement('td');
      statusCell.innerHTML = `
        <button class="btn btn-success done" onclick="handleStatus(${index}, 'done')">Выполнена</button>
        <button class="btn btn-danger rejected" onclick="handleStatus(${index}, 'rejected')">Отказ</button>
      `;
      
      row.appendChild(fioCell);
      row.appendChild(snilsCell);
      row.appendChild(statusCell);
  
      requestsBody.appendChild(row);



      // ДЕТАЛИ
      const detailsRow = document.createElement('tr');
      const detailsCell = document.createElement('td');
      detailsCell.colSpan = 3;
  
      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('student-details');
      detailsDiv.innerHTML = `
        <strong>Дата рождения:</strong> ${request.birthDate}<br>
        <strong>Факультет:</strong> ${request.faculty}<br>
        <strong>Группа:</strong> ${request.group}<br>
        <strong>Email:</strong> ${request.email}<br>
        <strong>Телефон:</strong> ${request.phone}<br>
        <strong>Вид справки:</strong> ${request.type}<br>
        <strong>Количество экземпляров:</strong> ${request.copies}<br>
        <strong>Место предоставления:</strong> ${request.place}<br>
        <strong>Дата заказа:</strong> ${request.date}
      `;
  
      detailsCell.appendChild(detailsDiv);
      detailsRow.appendChild(detailsCell);
      requestsBody.appendChild(detailsRow);
  
      fioCell.addEventListener('click', () => {
        detailsDiv.style.display = (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') ? 'block' : 'none';
      });
    });
  }

  function handleStatus(index, status) {
    const request = fakeRequests[index];
    const archiveRow = document.createElement('tr');
    archiveRow.classList.add(status === 'done' ? 'table-success' : 'table-danger');
  
    const fioCell = document.createElement('td');
    fioCell.textContent = request.fullName;
    fioCell.classList.add('clickable');
    fioCell.style.cursor = 'pointer';
  
    const snilsCell = document.createElement('td');
    snilsCell.textContent = request.snils;
  
    const dateOrderCell = document.createElement('td');
    dateOrderCell.textContent = request.date;
  
    const dateCompletedCell = document.createElement('td');
    dateCompletedCell.textContent = new Date().toLocaleDateString();
  
    archiveRow.appendChild(fioCell);
    archiveRow.appendChild(snilsCell);
    archiveRow.appendChild(dateOrderCell);
    archiveRow.appendChild(dateCompletedCell);
  
    archiveBody.appendChild(archiveRow);
  
   
    const detailsRow = document.createElement('tr');
    const detailsCell = document.createElement('td');
    detailsCell.colSpan = 4;
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('student-details');
    detailsDiv.innerHTML = `
      <strong>Дата рождения:</strong> ${request.birthDate}<br>
      <strong>Факультет:</strong> ${request.faculty}<br>
      <strong>Группа:</strong> ${request.group}<br>
      <strong>Email:</strong> ${request.email}<br>
      <strong>Телефон:</strong> ${request.phone}<br>
      <strong>Вид справки:</strong> ${request.type}<br>
      <strong>Количество экземпляров:</strong> ${request.copies}<br>
      <strong>Место предоставления:</strong> ${request.place}<br>
      <strong>Дата заказа:</strong> ${request.date}
    `;
  
    detailsCell.appendChild(detailsDiv);
    detailsRow.appendChild(detailsCell);
    archiveBody.appendChild(detailsRow);
  
    fioCell.addEventListener('click', () => {
      detailsDiv.style.display = (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') ? 'block' : 'none';
    });
  
    fakeRequests.splice(index, 1);
    renderRequests();
  }
  
  renderRequests();
  