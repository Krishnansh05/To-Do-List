// script.js

document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;

        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
