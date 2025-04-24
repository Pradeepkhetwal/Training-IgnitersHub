const input = document.getElementById('item')
const todolist = document.getElementById('todo-box')
const button = document.getElementById('btn');


// Add task functionality.
function addTask() {
  if (input.value === '') {
    alert("You must write Something");
  }
  else {
    const li = document.createElement('li');

    let data = input.value;
    li.innerHTML = `${data}    <i class="fas fa-times"></i>`;
    todolist.appendChild(li);
    saveLocal();
  }
  input.value = "";
}


// delete task functionality.
todolist.addEventListener("click", function (e) {

  if (e.target.tagName === 'I') {
    const li = e.target.parentElement;
    const taskContent = li.firstChild.textContent.trim();
    li.remove(); 

  // userdefined function to delete items from the local storage.
    removeLocal(taskContent);
  }
});

// function to add the todo-tasks in our local storage.

function saveLocal() {
  // creating an empty array that will store the tasks.
  let tasks = [];

  // now we will use query selector on the html element as when we do document.querySelector it checks for the element all over the webpage but when we apply it over to a specific element it will check within that element only.

  // getting all the listitems.
  // querySelectorAll returns a nodelist which means ew can apply forEach to loop or iterate all the items.
  todolist.querySelectorAll('li').forEach(function (item) {
    tasks.push(item.firstChild.textContent.trim());
  });

  // JSON.stringify() is used to convert js object or array to a single string.
  // ex-: const tasks = ['Buy Milk', 'Do Homework'];
  // '["Buy Milk","Do Homework"]'  ← a single string
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

// function to display all tasks.

function displayTask() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  todolist.innerHTML = '';

  tasks.forEach(function (task) {
    const li = document.createElement(
      'li'
    );

    li.innerHTML = `${task} <i class ="fas fa-times"></i>`;

    todolist.appendChild(li);
  })

}

// remove the data from local storage .

function removeLocal(taskContent) {
  // getting all tasks from the local storage, and converting them to js object/array(depending on sturcture of data) from json string.

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  //it will return an array of tasks that will not have the deleted task.
  tasks = tasks.filter(function (task) {
    return task != taskContent;
  });

  //update local storage.
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// call displayTask to show the tasks when page loads

/*
window.onload is an event handler for the load event of the window object, which is fired when the page (including all its content, like images, scripts, and styles) has completely loaded.

When you assign a function to window.onload, you are assigning the function itself, not calling it immediately.
*/
window.onload = displayTask;