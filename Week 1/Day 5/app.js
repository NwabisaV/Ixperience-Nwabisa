class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

class TaskListPage {
    constructor() {
        this.Task = []; //Array of task instances...

    }
    addTask(Task) {
        console.log("Adding..", task);
    }

    onTaskClick() {}

    editTask(taskId) {}

    updateTask(taskId, title) {}

}



document.getElementById("button-addon2").addEventListener('click', (e) => {
    console.log("Add a task...");
    const taskInput = getElementById("task");
    const task = taskInput.value;
    TaskListPage.addTask(task);

});