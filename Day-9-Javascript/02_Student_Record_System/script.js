// This flag will tell whether the operation is an update operation or a fresh insert operation.

var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
    }
    else {
      updateRecord(formData);
      resetForm();
    }
   
} else {
  alert("All fields are mandatory");
}
}

// function to retrieve data from the form.

function readFormData() {
  // creating an object to hold all the input values.

  var formData = {};
  // inside the square brackets we have keys which we are creating and their value is coming from the RHS.
  formData['name'] = document.getElementById('name').value;
  formData['RollNo'] = document.getElementById('RollNo').value;
  formData['DOB'] = document.getElementById('DOB').value;
  formData['Year'] = document.getElementById('Year').value;
  formData['Branch'] = document.getElementById('Branch').value;

  return formData;
}

// function to insert data into the table which we will show to the user.
function insertNewRecord(data) {
  // here we have got the access to the table body.
  // [0] here is used to select the first tbody in the table.
  var table = document.getElementById('Student-list').getElementsByTagName('tbody')[0];

  // table.insertRow function is used to insert a row into a table here we pass the index where we want to insert the row .So initially table length is 0 so we have used it as index as the length will be increased all the new rows will be added to the last in the table.
  var newRow = table.insertRow(table.length)

  //The insertCell() method is called on a row element (<tr>), and it inserts a new cell (<td>) into that row.

  // The index 0 indicates that the new cell should be inserted at the first position of the row.
  
  // insertCell(0) returns the newly created <td> element (cell), 

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.RollNo;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.DOB;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Year;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Branch;

  // adding edit and delete button for every row.

  cell6 = newRow.insertCell(5);
  cell6.innerHTML =  `
  <a href="#" class="editBtn">Edit</a> 
  <a href="#" class="deleteBtn">Delete</a>`;
  
    // Attach event listeners for Edit and Delete buttons
    var editBtn = cell6.querySelector('.editBtn');
  var deleteBtn = cell6.querySelector('.deleteBtn');
  
  editBtn.addEventListener('click', function (event) {
    onEdit(event);
  });

  deleteBtn.addEventListener('click', function (event) {
    onDelete(event); 
  });
}

function resetForm() {
  document.getElementById('name').value = "";
  document.getElementById("RollNo").value = "";
  document.getElementById("DOB").value = "";
  document.getElementById("Year").value = "";
  document.getElementById("Branch").value = "";
  // after successfull insert/update make it null again.
  selectedRow = null;
}

// function to edit a row.

function onEdit(event) {
  
  var a = event.target;
  
  selectedRow = a.parentElement.parentElement;
  
  console.log(selectedRow);

  // form mein wapas values aa ajayengi in the input fields when we will click on edit.
  document.getElementById('name').value = selectedRow.cells[0].textContent;
  console.log(selectedRow.cells[0].innerHTML);
  document.getElementById('RollNo').value = selectedRow.cells[1].textContent;
  console.log(selectedRow.cells[1].innerHTML);
  document.getElementById('DOB').value = selectedRow.cells[2].textContent;
  console.log(selectedRow.cells[2].innerHTML);
  document.getElementById('Year').value = selectedRow.cells[3].textContent;
  console.log(selectedRow.cells[3].innerHTML);
  document.getElementById('Branch').value = selectedRow.cells[4].textContent;
  console.log(selectedRow.cells[4].innerHTML);
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.RollNo;
  selectedRow.cells[2].innerHTML = formData.DOB;
  selectedRow.cells[3].innerHTML = formData.Year;
  selectedRow.cells[4].innerHTML = formData.Branch;
}

function onDelete(event) {
  if (confirm('Are you sure to delete this record ?')) {
    var a = event.target;
    row = a.parentElement.parentElement;
    document.getElementById("Student-list").deleteRow(row.rowIndex);
    resetForm();
}
}

function validate() {
  if (document.getElementById('name').value == '' || document.getElementById('RollNo').value == '' || document.getElementById('DOB').value == '' || document.getElementById('Year').value == '' || document.getElementById('Branch').value == '') {
    return false;
  }
  else {
    return true;
  }
}