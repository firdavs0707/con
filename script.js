const elForm = document.querySelector('.form-box');
let elInputName = document.querySelector('.input-name');
let elInputSurname = document.querySelector('.input-surname');
let elInputAge = document.querySelector('.input-age');
let elInputEmail = document.querySelector('.input-email')
let result = document.querySelector('.output');

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  let select = document.createElement('select');
  let option1 = document.createElement('option');
  let option2 = document.createElement('option');
  let option3 = document.createElement('option');
  let option4 = document.createElement('option');
  
  option1.textContent = `Name: ${elInputName.value}`;
  option2.textContent = `Surname: ${elInputSurname.value}`;
  option3.textContent = `Age: ${elInputAge.value}`;
  option4.textContent = `Email: ${elInputEmail.value}`;
  select.appendChild(option1)
  select.appendChild(option2)
  select.appendChild(option3)
  select.appendChild(option4)
  result.appendChild(select)

  select.setAttribute('class', 'd-block mx-auto mb-3')
})


