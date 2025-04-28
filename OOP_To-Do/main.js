const todoList = new TodoList();

function addTask() {
  const taskInput = document.getElementById("taskInput");
  // console.log(taskInput);

  const taskTask = taskInput.value.trim();
  if (taskTask.length > 0) {
    todoList.addTask(taskTask);
    // console.log(taskInput.value);

    taskInput.value = "";
    todoList.renderTasks();
  }
}

document.getElementById("addButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
