import { tasks } from './main.js';
import { sortTasks } from './sort.js';

const taskList = document.getElementById('taskList');

export function renderTasks() {
    sortTasks(tasks);
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');

        li.className = `task ${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <div class="task-header" data-id="${task.id}">
            <div>
            ${task.title}
            <span class="badge"> ${task.priority}</span>
            </div>
            <div>
            <div class="task-desc ${task.show?"show":""}">
            ${task.description || "No description"}
            </div>
            <div class="task-actions">
            <button class="complete" data-id="${task.id}">
            ${task.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="delete" data-id="${task.id}">Delete</button>
            </div>
            </div>
            `;

        taskList.appendChild(li);
    });
}