import { tasks } from './main.js';

const titleInput = document.getElementById('title');
const titleError = document.getElementById('titleError');
const submitButton = document.getElementById('submitBtn');

export function validateForm() {
    const title = titleInput.value.trim();

    if (title.length < 3) {
        titleError.textContent = 'Title must be at least 3 characters long.';
        submitButton.disabled = true;
        return false;
    }

    const duplicate = tasks.some(
        task => task.title.toLowerCase() === title.toLowerCase()
    );

    if (duplicate) {
        titleError.textContent = 'Title must be unique.';
        submitButton.disabled = true;
        return false;
    }

    titleError.textContent = '';
    submitButton.disabled = false;
    return true;
}