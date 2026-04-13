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
            <span>${task.title} (${task.priority})</span>
            <div>
                <button class="complete" data-id="${task.id}">Complete</button>
                <button class="delete" data-id="${task.id}">Delete</button>
            </div>`;

        taskList.appendChild(li);
    });
}