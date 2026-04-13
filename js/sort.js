export function sortTasks(tasks) {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };

    return tasks.sort((a, b) => {
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        return b.createdAt - a.createdAt;
    });
}