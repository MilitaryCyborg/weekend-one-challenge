//Test JS
onReady();

function onReady() {
  console.log("Javascript is working!");
}

//Submit Employee Data To Form
function submitInfo(event) {
    // check info in event
    // console.log('submit clicked', event);
    // console.log('affirmation text', affirmation.value)
  
    let firstNameInput = document.getElementById('firstNameInput').value;
    console.log("First Name Input: ", firstNameInput);
    let lastNameInput = document.getElementById('lastNameInput').value;
  
    tablePath = document.getElementById('tableBody')
    tablePath.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td><button onclick="deleteInfo(event)">❌</button></td></tr>`;
    event.preventDefault()
  }
  
  //Delete Row Of Employee Data
  function deleteInfo(event) {
    // Console log to find path to correct node of entire row data
    // console.log('test', event.target.parentNode.parentNode)
    
    event.target.parentNode.parentNode.remove();
  
    event.preventDefault()
  }