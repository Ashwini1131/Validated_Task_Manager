import { loadFromLocalStorage } from './storage.js';
import { setupEvents } from './events.js';

export let tasks = [];

export function setTasks(newTasks) {
    tasks = newTasks;
}

loadFromLocalStorage();
setupEvents();