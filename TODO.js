const prompt = require("prompt-sync")();

let tasks = [];

function addTask() {
    let task = prompt("Enter new task: ");
    tasks.push(task);
    console.log("Task added.");
}

function removeTask() {
    let index = parseInt(prompt("Enter task index to remove: "));
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Task removed.");
    } else {
        console.log("Invalid index.");
    }
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("\nYour Tasks:");
        tasks.forEach((task, i) => console.log(i + ": " + task));
    }
}

function clearTasks() {
    tasks = [];
    console.log("All tasks cleared.");
}

while (true) {
    let command = prompt("Enter command (add, remove, view, clear, exit): ");

    if (command === "add") addTask();
    else if (command === "remove") removeTask();
    else if (command === "view") displayTasks();
    else if (command === "clear") clearTasks();
    else if (command === "exit") break;
    else console.log("Invalid command.");
}
