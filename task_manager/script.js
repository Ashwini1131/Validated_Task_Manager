const titleInput = document.getElementById('title');
const priorityInput = document.getElementById('priority');
const descriptionInput = document.getElementById('description');
const submitButton = document.getElementById('submitBtn');
const titleError = document.getElementById('titleError');
const taskList = document.getElementById('taskList');

let tasks = [];

titleInput.addEventListener('input', validateForm);

function validateForm() {

const title = titleInput.value.trim();

if (title.length < 3) {
titleError.textContent = 'Title must be at least 3 characters long.';
submitButton.disabled = true;
return;
}

const duplicate = tasks.some(
task => task.title.toLowerCase() === title.toLowerCase()
);

if (duplicate) {
titleError.textContent = 'Title must be unique.';
submitButton.disabled = true;
return;
}

titleError.textContent = '';
submitButton.disabled = false;

}

document.getElementById('taskForm').addEventListener('submit', function (e) {

e.preventDefault();

const task = {
id: Date.now(),
title: titleInput.value.trim(),
priority: priorityInput.value,
description: descriptionInput.value.trim(),
createdAt: Date.now(),
completed: false
};

tasks.push(task);

saveToLocalStorage();
renderTasks();

this.reset();
submitButton.disabled = true;

});

function sortTasks() {

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

tasks.sort((a, b) => {

if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
return priorityOrder[a.priority] - priorityOrder[b.priority];
}

return b.createdAt - a.createdAt;

});

}

function renderTasks() {

sortTasks();

taskList.innerHTML = '';

tasks.forEach(task => {

const li = document.createElement('li');

li.className = `task ${task.priority.toLowerCase()} ${task.completed ? "completed" : ""}`;

li.innerHTML = `
    <div>
    <span>
    ${task.title} - ${task.description} (${task.priority})
    </span>
    </div>
<div>
<button class="complete" data-id="${task.id}">Complete</button>
<button class="delete" data-id="${task.id}">Delete</button>
</div>
`;

taskList.appendChild(li);

});

}

taskList.addEventListener('click', function(e){

const id = Number(e.target.dataset.id);

if(e.target.classList.contains('delete')){
tasks = tasks.filter(task => task.id !== id);
}

if(e.target.classList.contains('complete')){
tasks = tasks.map(task=>{
if(task.id === id){
task.completed = !task.completed;
}
return task;
});
}

saveToLocalStorage();
renderTasks();

});

function saveToLocalStorage(){
localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadFromLocalStorage(){
const data = localStorage.getItem('tasks');
if(data){
tasks = JSON.parse(data);
}
renderTasks();
}

loadFromLocalStorage();