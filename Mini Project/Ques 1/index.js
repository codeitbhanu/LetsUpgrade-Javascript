loadEvents();
// load every event in the page
function loadEvents() {
  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById('clear').addEventListener('click', clearList);
  document.querySelector('ul').addEventListener('click', deleteOrTick);

}
// subit data function
let count = 0;
let todoItems = []
function submit(e) {
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if (input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task, completed = false, tolocalstorage = true) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" key=${count}><label>${task}</label> <button class="delete" key=${count}>Delete</button>`;
  ul.appendChild(li);
  document.querySelector('.todopanel').style.display = 'block';
  console.log("Adding Item to index: " + count)
  todoItems.push({
    id: count++,
    task: task,
    completed: completed
  })
  
  if (tolocalstorage) localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// clear the LIST
function clearList(e) {
  let ul = document.querySelector('ul').innerHTML = '';
  todoItems = []
  localStorage.setItem('todoItems', JSON.stringify([]));
  count = 0;
}

// deleteTick
function deleteOrTick(e) {
  const k = e.target.getAttribute('key');
  if (e.target.className == 'delete') {
    deleteTask(e);
    //todoItems = todoItems.filter(item => item.id !== Number(k));
    console.log("Removing Item from index: " + k)
    todoItems.splice(k, 1);
    count--;
  }
  else {
    console.log("MarkCompleted Item from index: " + k)
    tickTask(e, k);
  }
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// delete task
function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e, k) {
  const task = e.target.nextSibling;
  let mark = false;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
    mark = true;
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#000000";
    mark = false;
  }
  todoItems[k].completed = mark;
  //localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function onLoad() {
  todoItems = JSON.parse(localStorage.getItem('todoItems'));
  console.log(todoItems)
  if (!todoItems) todoItems = []
  todoItems.map(todo => {
    addTask(todo.task, todo.completed, false)
  })
}