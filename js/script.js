
// ACADEMIC PLANNER

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Array to store academic tasks
let tasks = [];

// Function to display academic tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const listItem = document.createElement("li");
        const taskLabel = document.createElement("span");
        const completeButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        taskLabel.textContent = task.text;

        if (task.completed) {
            taskLabel.style.textDecoration = "line-through";
            taskLabel.style.color = "green";
        }

        completeButton.textContent = task.completed ? "Completed" : "Mark Complete";

        completeButton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        });

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        listItem.appendChild(taskLabel);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    });
}

if (taskForm && taskInput && taskList) {
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter an academic task.");
            return;
        }

        tasks.push({
            text: taskText,
            completed: false
        });

        displayTasks();
        taskInput.value = "";
    });
}


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d+$/;

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number must contain digits only.");
            return;
        }

        alert("Your form has been validated successfully!");
        contactForm.reset();
    });
}
