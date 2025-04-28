class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTask(taskText) {
    const task = {
      text: taskText,
    };
    this.tasks.push(task);
    this.renderTasks();
  }
  renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <span>${task.text}</span>
      <span>
      <button class="edit-button" onClick="">Edit</button>
      <button class="delete-button" onClick="">Delete</button>
      </span>
      `;

      taskList.appendChild(listItem);
    });
  }
}
