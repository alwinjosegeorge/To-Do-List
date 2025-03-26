document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementsByClassName("button-40")[0];
    const taskList = document.getElementById("task-list");

    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        const actionsContainer = document.createElement("div");
        actionsContainer.classList.add("task-actions");

        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = "✔️";
        completeBtn.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "❌";
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
        });

        actionsContainer.append(completeBtn, deleteBtn);
        taskItem.append(taskContent, actionsContainer);

        return taskItem;
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
