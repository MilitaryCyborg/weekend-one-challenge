//Test JS
onReady();

function onReady() {
  console.log("Javascript is working!");
}

let totalSalaryExpense = 0;

//Submit Employee Data To Form & Delete Button & Monthly Total
function submitInfo(event) {
  let firstNameInput = document.getElementById("firstNameInput").value;
  console.log("First Name Input: ", firstNameInput);
  let lastNameInput = document.getElementById("lastNameInput").value;
  console.log("Last Name Input: ", lastNameInput);
  let idInput = document.getElementById("idInput").value;
  console.log("ID Input: ", idInput);
  let titleInput = document.getElementById("titleInput").value;
  console.log("Title Input: ", titleInput);
  let annualSalaryInput = document.getElementById("annualSalaryInput").value;
  console.log("Annual Salary Input: ", annualSalaryInput);

  tablePath = document.getElementById("tableBody");
  tablePath.innerHTML += `<tr><td>${firstNameInput}</td>
  <td>${lastNameInput}</td>
  <td>${idInput}</td><td>${titleInput}</td>
  <td>${annualSalaryInput}</td>
  <td><button onclick="deleteInfo(event)">Delete</button></td></tr>`;

  totalSalaryExpense += Number(annualSalaryInput);
  
  const divisor = 12;
  let monthlySalaryExpense = totalSalaryExpense / divisor;
  
  let assignTotal = document.getElementById("totalMonthly");
  assignTotal.innerText = monthlySalaryExpense;

  event.preventDefault();
}

//Delete Row Of Employee Data
function deleteInfo(event) {
  // Console log to find path to correct node of entire row data
  console.log("test", event.target.parentNode.parentNode);

  event.target.parentNode.parentNode.remove();

  event.preventDefault();
}
