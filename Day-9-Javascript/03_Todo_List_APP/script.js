const input = document.getElementById('item')
const todolist = document.getElementById('todo-box')
const button = document.getElementById('btn');

function addTask() {
  if (input.value === '') {
    alert("You must write Something");
  }
  else {
    const li = document.createElement('li');

    let data = input.value;
    li.innerHTML = `${data}    <i class="fas fa-times"></i>`;
    todolist.appendChild(li);
  }
  input.value = "";
}


todolist.addEventListener("click", function (e) {

  if (e.target.tagName === 'I') {
    const li = e.target.parentElement;
    li.remove(); 
  }
});