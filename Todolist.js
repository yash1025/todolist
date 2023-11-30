
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskInput.value}</span>
            <div class="task-buttons">
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
function deleteTask(button) {
    const listItem = button.parentNode.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(listItem);
}

function editTask(button) {
    const listItem = button.parentNode.parentNode;
    const taskText = listItem.querySelector('span').innerText;
    const newTaskText = prompt('Edit task:', taskText);

    if (newTaskText !== null) {
        listItem.querySelector('span').innerText = newTaskText;
    }
}
