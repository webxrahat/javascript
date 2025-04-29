// console.log("connect");

document.getElementById("btn").addEventListener("click", function () {
  const inputTask = document.getElementById("inp");
  const inputValue = inputTask.value.trim();

  if (inputValue) {
    const ulList = document.getElementById("list-text");

    let creatLi = document.createElement("li");

    creatLi.innerHTML = `
      <span class="task-text">${inputValue}</span>
      <span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </span>
    `;

    ulList.appendChild(creatLi);

    inputTask.value = "";

    const deleteBtn = creatLi.querySelector(".delete");
    deleteBtn.addEventListener("click", function () {
      creatLi.remove();
    });

    const editBtn = creatLi.querySelector(".edit");
    editBtn.addEventListener("click", function () {
      const taskSpan = creatLi.querySelector(".task-text");
      const currentText = taskSpan.textContent;
      const newText = prompt("Edit task:", currentText);
      if (newText !== null && newText.trim() !== "") {
        taskSpan.textContent = newText.trim();
      }
    });
  }
});
