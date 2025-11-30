const prompt = require("prompt-sync")();

let tasks = [];

function addTask() {
    const task = prompt("Enter a task to add: ");
    if (task.trim() === "") {
        console.log("❌ Task cannot be empty.");
        return;
    }
    tasks.push(task);
    console.log("✔ Task added successfully!");
}

function removeTask() {
    displayTasks();
    if (tasks.length === 0) return;

    const index = parseInt(prompt("Enter the index of the task to remove: "));

    if (isNaN(index) || index < 1 || index > tasks.length) {
        console.log("❌ Invalid index.");
        return;
    }

    tasks.splice(index - 1, 1);
    console.log("✔ Task removed successfully!");
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log("📭 No tasks available.");
        return;
    }

    console.log("\n📌 Your Tasks:");
    tasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task}`);
    });
    console.log();
}

function clearTasks() {
    tasks = [];
    console.log("✔ All tasks cleared!");
}

while (true) {
    console.log("\nChoose a command:");
    console.log(" add  → Add a task");
    console.log(" remove → Remove a task");
    console.log(" view → View all tasks");
    console.log(" clear → Clear all tasks");
    console.log(" exit → Exit program\n");

    const command = prompt("Enter command: ").toLowerCase();

    switch (command) {
        case "add":
            addTask();
            break;
        case "remove":
            removeTask();
            break;
        case "view":
            displayTasks();
            break;
        case "clear":
            clearTasks();
            break;
        case "exit":
            console.log("👋 Exiting program...");
            process.exit();
        default:
            console.log("❌ Invalid command. Try again.");
    }
}
