import { tasks, setTasks } from './main.js';
import { validateForm } from './validation.js';
import { saveToLocalStorage } from './storage.js';
import { renderTasks } from './render.js';

const titleInput = document.getElementById('title');
const priorityInput = document.getElementById('priority');
const descriptionInput = document.getElementById('description');
const submitButton = document.getElementById('submitBtn');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

export function setupEvents() {

    submitButton.disabled = true;

    titleInput.addEventListener('input', validateForm);

    
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();        
        if (submitButton.disabled) return;
        submitButton.disabled = true;

        const title = titleInput.value.trim();

        
        if (!title || title.length < 3) return;

        
        const duplicate = tasks.some(
            task => task.title.toLowerCase() === title.toLowerCase()
        );
        if (duplicate) return;

        
        const validPriorities = ['High', 'Medium', 'Low'];
        let priority = priorityInput.value;
        if (!validPriorities.includes(priority)) {
            priority = 'Medium';
        }

        const task = {
           
            id: Date.now() + Math.random(),

            title: title,
            priority: priority,
            description: descriptionInput.value.trim(),
            createdAt: Date.now(),
            completed: false,
            show: false
        };

        tasks.push(task);

        saveToLocalStorage();
        renderTasks();

        this.reset();
        submitButton.disabled = true;
    });


    taskList.addEventListener('click', function (e) {

        const target = e.target.closest('[data-id]');
        if (!target) return;
        const id = Number(target.dataset.id);
        if (!id) return;
 
        if (target.classList.contains('delete')) {
            setTasks(tasks.filter(task => task.id !== id));
        } else if (target.classList.contains('complete')) {
            setTasks(tasks.map(task => {
                if (task.id === id) {
                
                    task.completed = !task.completed;
                }
                return task;
            }));
        } else if (target.classList.contains('task-header')) {
            const task = tasks.find(task => task.id === id);
            if (task) {
                task.show = !task.show;
            }
        }

        saveToLocalStorage();
        renderTasks();
    });
}