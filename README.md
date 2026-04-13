# Task Manager (Vanilla JavaScript)

A simple and interactive Task Manager built using pure JavaScript.

## Features
- Real-time validation
- Duplicate task detection
- Multi-level sorting (Priority + Time)
- Event delegation
- LocalStorage persistence

## Tech Stack
- HTML
- CSS
- JavaScript (Vanilla)

## How to Run
1. Open the project folder
2. Run using Live Server

## Folder Structure
- js/ → Contains all JavaScript modules

## Stage 1 – Setup

Created basic HTML structure with form and task list.
Connected JS files using modules.

## Stage 2 – Validation
Added real-time validation for title input.
Disabled submit button when input is invalid.

## Stage 3 – Add Task
Created task object with id, title, priority, description.
Added task to array and cleared form after submit.

## Stage 4 – Local Storage

Saved tasks using localStorage.
Loaded tasks when page refreshes.

## Stage 5 – Render UI

Displayed tasks dynamically on screen.
Updated UI after every action.

## Stage 6 – Delete Task

Used filter() to remove task based on id.