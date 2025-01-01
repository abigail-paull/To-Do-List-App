function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskText = taskInput.value.trim();
    const taskDueTime = taskTime.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    li.appendChild(taskContent);

    if (taskDueTime) {
        const timeSpan = document.createElement('span');
        timeSpan.className = 'task-time';
        timeSpan.textContent = taskDueTime;
        li.appendChild(timeSpan);
    }

    const closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.innerHTML = '<span class="material-icons">close</span>';
    closeButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(closeButton);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);

    taskInput.value = '';
    taskTime.value = '';
}

