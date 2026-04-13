import { tasks, setTasks } from './main.js';
import { renderTasks } from './render.js';

export function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('tasks');

    if (data) {
        setTasks(JSON.parse(data));
    }

    renderTasks();
}